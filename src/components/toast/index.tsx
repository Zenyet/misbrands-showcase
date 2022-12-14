import './style.scss';

interface Info {
    msg: '默认消息' | string;
}

function Toast(config: Info) {
    let {msg} = config;

    return (
        <div id="message">
            <span id='text'>
                {msg}
            </span>
        </div>
    )
}

export default Toast;