// Pillar 3: Getters & Setters (Data Encapsulation)
/* 
Getters (get ) aur setters (set) Pseudo- Properties banate hain. Inka matlab hai ki bahar se ye normal keys (obj.age)jaisi dikhti hain, lekin background me functions executre hote hain.
*/
// Dynamic Validation & Computed Properties
const userAccount = {
    firstname :"Sahil",
    lastname: "Kilaniya",
    _rawBalance: 1000, //'_'standar notation hai private/internal data ke liye

    //Getter: Computed Property (read access)
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    },

    get balance(){
        return `${this._rawBalance.toLocaleString(`en-IN`)}`;
    },

    //SETTER: Validation (write access)
    set balance(amount){
        if(typeof amount !=='number'){
            console.error("ERROR: Amount number hona chahiye");
            return;
        }

        if (amount<0){
            console.error("ERROR: balance negative nahi ho sakta");
            return;
        }
        this._rawBalance = amount;
    }
};
// Accessing Getters (Method ki tarah () nahi lagate)
console.log(userAccount.fullname);
console.log(userAccount.balance);
