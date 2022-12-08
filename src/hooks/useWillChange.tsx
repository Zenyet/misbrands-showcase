// will-change: filter -> fix safari filter: drop-shadow bug
function useWillChange(): {willChange: string} | {} {
    let ua = navigator.userAgent;
    return !ua.includes('Chrome') && ua.includes('Safari') ? {willChange: "filter"} : {}
}

export default useWillChange;