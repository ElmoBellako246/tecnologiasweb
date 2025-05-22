(()=>{

class Manager {
    
    constructor(
        public name: string,
        public id: number, 
        public phoneNo: number, 
        public location: string)
    {
         this.name = name;
         this.id = id;
         this.phoneNo = phoneNo;
         this.location = location;
    }

    public PurchaseInventory = () => {}
    public RecordComplaints = () => {}
    public ManageStaff= () => {}
}






class Inventory {

    constructor(
        public type: string,
        public status: string) {
        this.type = type;
        this.status = status;
    }
}





class Guest {

    constructor(
        public name: string, 
        public id: number, 
        public phoneNo: number, 
        public address: string, 
        public roomNo: number) {

        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.address = address;
        this.roomNo = roomNo;
    }

    public CheckIn = () => {}
    public CheckOut = () => {}
    public PayBill = () => {}
    public OrderFood = () => {}
    public SubmitFeedback = () => {}
}


class Receptionist {

    constructor(
        public name: string, 
        public id: number, 
        public phoneNo: number, 
        public location: string) {

        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.location = location;
    }

    public CheckRoomAvailability = () => {}
    public BookRoom = () => {}
    public GenerateBill = () => {}
    public AcceptCustomerFeedback = () => {}
}


class Rooms {

    constructor(
        public roomNo: number, 
        public location: string) {

        this.roomNo = roomNo;
        this.location = location;
    }
}



class FoodItems {
    
    constructor(
        public id: number, 
        public name: string) {

        this.id = id;
        this.name = name;
    }
}



class Housekeeping {

    constructor(
        public name: string, 
        public id: number, 
        public location: string) {

        this.name = name;
        this.id = id;
        this.location = location;
    }

    public CleanRoom = () => {}
}


class Bill {

    constructor(
        public billNo: number, 
        public guestName: string) {

        this.billNo = billNo;
        this.guestName = guestName;
    }
}
})()
