let a = [1,5,9,7,11,15,17]
let start = "", mid="", end="";
let search = 7, store;
if(a.length%2==0){
    (mid=a.length/2)
}else{
    mid=(a.length-1)/2;
}
while (start<=end){
    if(mid>search){
        store=start
        end=mid
    }
    if(a[start]==search||a[end]==search||a[mid]==search){
        console.log("Element found at index:", start, end, mid);
         break;
    }
}



