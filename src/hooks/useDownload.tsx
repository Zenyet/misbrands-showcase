
function useDownload(filename: string) {
    const anchor = document.createElement('a');
    anchor.href = `/svgs/${filename}.svg`;
    anchor.download = `${filename}.svg`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

export default useDownload;