function useCopySvg(filename: string) {
    fetch(`/svgs/${filename}.svg`).then(resp => {
        const fr = new FileReader();
        fr.onload = () => {
            navigator.clipboard.writeText(fr.result as string).then(() => {
                alert('copied!');
            })
        }
        resp.blob().then(value => { // 将 response 转换成 blob
            fr.readAsText(value, 'uft-8'); // 读取 svg blob的文本
        })

    }).catch(err => {
        console.log(err);
    })
}

export default useCopySvg;