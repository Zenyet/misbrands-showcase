import {useEffect, useState} from "react";

function useDynamicImport(filename: string) {
    const [loading, setLoading] = useState(false);
    const [svgHolder, setSvgHolder] = useState(null);

    useEffect(() => {
        setLoading(true);
        const importSvg = async (): Promise<void> => {
            try {
                setSvgHolder((await import(`../assets/svg/${filename}.svg`)).ReactComponent);
            }catch (e) {
                console.error(e);
            }finally {
                setLoading(false);
            }
        }
        importSvg().catch(err => {
            console.log(err);
        });
    }, [filename]);

    return [loading, svgHolder];
}

export default useDynamicImport;