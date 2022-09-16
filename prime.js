let f = 0;
for (let i=2;i<num;i++){
    if(num%i==0){
        f++;
        break;
    }
}
if(f==0){
    console.log("Yes");
}else{
    console.log("No");
}