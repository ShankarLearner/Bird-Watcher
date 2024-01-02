class BadSantury{
    constructor(BirdsinWeek){
        this.BirdsinWeek = BirdsinWeek;
    }
   getLastWeek(){
        return this.BirdsinWeek
    }
    
    getToday(){
        return this.BirdsinWeek[this.BirdsinWeek.length - 1];
    } @Monish P
    incrementTodaysCount(){
        var incrementBirds =  Bird.BirdsinWeek[Bird.BirdsinWeek.length - 1]+1;
        Bird.BirdsinWeek.splice(Bird.BirdsinWeek.length-1,1,incrementBirds);
        return this.BirdsinWeek;
    }
    hasDayWithoutBirds(){
        return this.BirdsinWeek.includes(0);
    }
    getCountForFirstDays(input){
        var given_input = Number(prompt("Enter the Number you want"));
        var sum = 0;
        for(let i = 0;i<given_input;i++){
            sum+=this.BirdsinWeek[i];
        }
        return sum;
    }
    getBusyDays(){
        var Days = 0;   
        for(let i = 0;i<this.BirdsinWeek.length;i++){
                if(this.BirdsinWeek[i] >= 5){
                    Days++;
                }
            } 
            return Days;
    }
}
const Bird = new BadSantury([1,2,0,5,6,7,8]);


