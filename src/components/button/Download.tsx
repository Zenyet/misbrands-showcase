import useWillChange from "../../hooks/useWillChange";

function Download(props: { filename: string }) {
    const {filename} = props;
    const style = useWillChange();

    function handleDownloadClick() {
        const anchor = document.createElement('a');
        anchor.href = `/showcase/svgs/${filename}.svg`; // 反向代理虚拟目录
        anchor.download = `${filename}.svg`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    return (
        <i className="right" style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
                 viewBox="0 0 32 32" className='download'
                 onClick={handleDownloadClick}
            >
                <path fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4l5-4m-5-10v14"/>
            </svg>
        </i>
    )
}

export default Download;