export const throttle = (delay: number, functionPromised: (...args: any[]) => any) => {
    var check: boolean = true;
    return function(...args: any[]) {
        if(check){
            check = false;
            setTimeout((...args: any[]) => {functionPromised(...args); 
                check = true}, delay);

            return functionPromised(...args);
        }
    }
}