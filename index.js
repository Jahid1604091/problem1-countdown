function countdownSequence(arr) {
    let i = 0, count = 0, b = -1, e = -1, pos = -1, newArr = [];
    while (i < arr.length) {
        if (i - 1 >= 0 && arr[i - 1] - arr[i] == 1) {   // checks  between the previous and now position/
            if (pos == -1) {
                b = i - 1, e = i, pos = i;  //1. b=0,e=1,pos=1 ->i=1
                                            //2. b=0,e=2,pos=1 ->i=2 
                                            //3. b=0,e=3,pos=1 ->i=3 
            }
            else {
                e = i;
            }
        }
        if (arr[i] == 1) {                   // ending point of our sequence;
            count += 1;
            if (pos == -1) {
                b = e = i;
            }
            let s = '';
            for (let j = b; j <= e; j++) {
                s += arr[j];
                if(j!==e) s+=',';
            }
            newArr.push(`[${s}]`)
            b = e = pos = -1;
        }
        i++;
    }
    console.log(`[${count}, [${newArr}]]`)
}
countdownSequence([4, 3, 2, 1, 3, 2, 1, 1])

