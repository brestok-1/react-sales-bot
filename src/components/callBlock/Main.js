import GPTReport from "./GPTReport";
import CallButtons from "./CallButtons";
import './Main.css'
import {useState} from "react";
import {generateUUID, getReport, showMessage} from "../../utils";

function Main(props) {
    const [mediaRecorder, setMediaRecorder] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [audioChunks, setAudioChunks] = useState([]);
    const [ws, setWs] = useState(null);
    const [report, setReport] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function startCall() {
        const uuid = generateUUID()
        const socket = new WebSocket(`ws://127.0.0.1:8000/ws/${uuid}`);
        // const socket = new WebSocket(`wss://brestok-sales-bot-backend.hf.space/ws/${uuid}`);

        props.clearDialogue()
        setReport('')

        let emptyFiels = ''
        if (emptyFiels.length > 0) {
            alert('The following settings have not been set:\n' + emptyFiels)
            window.location.reload()
        } else {
            socket.onopen = () => {
                const wsData = {
                    'profileAge': props.profileAge,
                    'profileGender': props.profileGender,
                    'profileIncomeBracket': props.profileIncomeBracket,
                    'profileOccupation': props.profileOccupation,
                    'profileIndustry': props.profileIndustry,
                    'profileCompany': props.profileCompany,
                    'profileLocation': props.profileLocation,
                    'profileInterests': props.profileInterests,
                    'profileGoals': props.profileGoals,
                    "profileAdditionalInformation": props.profileAdditionalInformation,

                    'goal': props.goal,
                    'reason': props.reason,
                    'productDetail': props.productDetail,
                    'companyDescription': props.companyDescription,

                }
                console.log(wsData)
                socket.send(JSON.stringify({
                    'type': 'set_settings',
                    'data': wsData
                }));
                setIsLoading(true)
            };

            socket.onclose = (event) => console.log('WebSocket disconnected');
            socket.onerror = (error) => {
                alert('Something was wrong. Try again later.')
                window.location.reload()
            };
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data)
                const signal = message['type']
                if (signal === 'random_persona') {
                    setReport(message['data']['persona'])
                    setTimeout(function () {
                        setIsLoading(false)
                        startRecording();
                    }, 10000);
                } else if (signal === 'answering') {
                    playResponse(message['data'])
                }
            };
            setWs(socket);
        }
    }

    const startRecording = () => {
        showMessage('You can speak!')
        navigator.mediaDevices.getUserMedia({audio: true})
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);
                try {
                    recorder.ondataavailable = (event) => {
                        setAudioChunks(prevAudioChunks => [...prevAudioChunks, event.data]);

                    };
                } catch (e) {
                    alert('It is not possible to send an empty message')
                }
                recorder.start();
            })
            .catch(error => {
                console.error(error);
            });
    };

    const stopAndSend = () => {
        mediaRecorder.ondataavailable = (event) => {
            setAudioChunks(prevAudioChunks => {
                const newAudioChunks = [...prevAudioChunks, event.data];

                const audioBlob = new Blob(newAudioChunks, {type: 'audio/wav'});
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = () => {
                    let base64String = reader.result;
                    base64String = base64String.split(',')[1];
                    const dataWS = {
                        'type': 'asking',
                        'data': {
                            'audio': base64String,
                        }
                    }
                    ws.send(JSON.stringify(dataWS));
                };

                setAudioChunks([]);
                setIsLoading(true)
                return newAudioChunks;
            });
        };
        try {
            mediaRecorder.stop();
        } catch (e) {
            return
        }
    };


    const playResponse = (data) => {
        setIsLoading(false)
        const userMessage = data['user_query']
        const botMessage = data['ai_response']
        const audioSrc = `data:audio/mp3;base64,${data['voice_response']}`;
        const audio = new Audio(audioSrc);
        audio.play();

        props.onAddNewMessage('user', userMessage)
        audio.onended = () => {
            props.onAddNewMessage('bot', botMessage)
            startRecording()
        };
    };

    function endCall() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            setAudioChunks([]);
        }
        if (ws && ws.readyState === WebSocket.OPEN) {
            const isConfirmed = window.confirm("Do you want to get a report for the current dialogue?");
            if (!isConfirmed) {
                return;
            }

            ws.close();
            setWs(null);
            setIsLoading(true)
            getReport(props.dialogue, {
                'goal': props.goal,
                'reason': props.reason,
                'product_details': props.productDetail,
            })
                .then(report => {
                    setIsLoading(false)
                    setReport(report['response']);
                })
                .catch(error => {
                    setIsLoading(false)
                    setReport('NET ERROR')
                });
        }
    }


    return (
        <div className="col-md-6 order-2">
            <div id="message">Hello World</div>
            <div className="chat">
                <div className="fs-3 text-center mt-3">
                    Sales Bot
                </div>
                <GPTReport report={report} isLoading={isLoading}/>
                <CallButtons onCallStarting={startCall} onStopTalking={stopAndSend} onEndCalling={endCall}/>
            </div>
        </div>
    )
}

export default Main