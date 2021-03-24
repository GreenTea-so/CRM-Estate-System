pragma solidity <0.7.0;
pragma experimental ABIEncoderV2;

contract MyContr{
    
    struct Home{
        uint id_home;
        address owner;
        address renter;
        string types;
        bool zalog;
        uint S;
    }
    
    struct User{
       address payable adr;
       uint id_user;
       uint role;
       string log;
    }
    
    struct Give{
        uint id_give;
        uint id_home;
        address owner;
        address renter;
        uint time;
    }
    
    struct Rent{
        uint id_home;
        uint id_rent;
        address owner;
        address payable renter;
        uint count;
        uint time;
    }
    
    struct Deposit{
        uint id_home;
        uint id_deposit;
        address owner;
        address payable renter;
        uint count;
        uint time;
    }
    
    event IntegersAdded(uint x, uint y, uint z);
    
    uint size_user = 0;
    uint size_home = 0;
    uint size_give = 0;
    uint size_rent = 0;
    uint size_deposit = 0;
    address admin = 0x0000000000000000000000000000000000000000;
    address payable null_adr = 0x0000000000000000000000000000000000000000;
    mapping(uint => Home) homes;
    mapping(uint =>Give) gives;
    mapping(uint =>Rent) rents;
    mapping(uint =>Deposit) deposits;
    
    mapping(string => User) users;
    mapping(uint => User)  users_id;
    mapping(address => User) users_address;
    
    
    constructor() public {
        string memory log = "admin";
        admin = msg.sender;
        users[log].adr = msg.sender;
        users[log].role = 1;
        users[log].log = log;
        users_address[msg.sender] = users[log];
        users_id[size_user] = users[log];
        size_user++;
    }
    
    modifier Is_Admin(){
        require(users_address[msg.sender].role == 1, "Функция доступна только администратору");
        
        _;
    }
    
    modifier Is_Owner(uint _id_home){
        require(homes[_id_home].owner == msg.sender, "Вы не владелец");
        _;
    }
    
    function add_admin(string memory _login) public Is_Admin{
        require(users[_login].adr != null_adr);
        require(users[_login].role == 0);
        users[_login].role = 1;
        users_address[users[_login].adr] = users[_login];
        users_id[users[_login].id_user] = users[_login];
    }
    
    function return_admin() public view returns(address){
        return admin;
    }
    
    function admin_is() public view returns(bool){
        if (users_address[msg.sender].role == 1) {
            return true;
        }
        else{
            return false;
        }
    }
    
    function len_user() public view returns(uint){
        return size_user;
    }
    
    function get_user(uint _id_user) public view returns(User memory){
        return users_id[_id_user];
    }
    
    function login_is(string memory _login)public view returns(bool){
         if (users[_login].adr == null_adr){
             return true;
         }
         else{
             return false;
         }
    }
    
    function registr_user(string memory _login) public{
        require(users_address[msg.sender].adr == null_adr);
        require(users[_login].adr == null_adr);
        users[_login].adr = msg.sender;
        users[_login].role = 0;
        users[_login].id_user = size_user;
        users[_login].log = _login;
        users_id[size_user] = users[_login];
        users_address[msg.sender] = users[_login];
        size_user++;
    }
    
    function autorization_user(string memory _login) public view returns(address){
        require(users[_login].adr != null_adr);
        return users[_login].adr;
    }
    
    function registr_home(address _owner, string memory _types, uint _S) public Is_Admin{
        homes[size_home].id_home = size_home;
        homes[size_home].owner = _owner;
        homes[size_home].renter = null_adr;
        homes[size_home].types = _types;
        homes[size_home].zalog = false;
        homes[size_home].S = _S;
        size_home++;
        emit IntegersAdded(4, 3, 2);
    }
    
    function _Time(uint _time) private view returns(uint){
        return _time;
    }
    
    function get_home(uint _id_home) public view returns(Home memory){
        return(homes[_id_home]);
    }
    
    function Create_Give(uint _id_home, address _renter, uint _time) public Is_Owner(_id_home){
        require(homes[_id_home].zalog == false);
        require(_renter != msg.sender);
        gives[size_give].id_give = size_give;
        gives[size_give].id_home = _id_home;
        gives[size_give].owner = homes[_id_home].owner;
        gives[size_give].renter = _renter;
        gives[size_give].time = block.timestamp + _Time(_time);
        homes[_id_home].zalog = true;
        homes[_id_home].renter = _renter;
        size_give++;
    }
    
    function Give_Renter(uint _id_give) public returns(bool){
        require(gives[_id_give].renter == msg.sender);
        require(homes[gives[_id_give].id_home].zalog == true);
        require(homes[gives[_id_give].id_home].owner == gives[_id_give].owner);
        require(homes[gives[_id_give].id_home].owner != msg.sender);
        if (gives[_id_give].time >= block.timestamp){
            homes[gives[_id_give].id_home].owner = gives[_id_give].renter;
            homes[gives[_id_give].id_home].zalog = false;
            homes[gives[_id_give].id_home].renter = null_adr;
            delete gives[_id_give];
            return true;
        }
        else{
            homes[gives[_id_give].id_home].zalog = false;
            homes[gives[_id_give].id_home].renter = null_adr;
            delete gives[_id_give];
            return false;
        }
    }
    
    function cancel_owner(uint _id_give) public Is_Owner(gives[_id_give].id_home){
        require(gives[_id_give].owner == msg.sender, "Не совпадает адрес владельца");
        homes[gives[_id_give].id_home].zalog = false;
        homes[gives[_id_give].id_home].renter = null_adr;
        delete gives[_id_give];
    }
    
    function cancel_renter(uint _id_give) public{
        require(gives[_id_give].renter == msg.sender);
        homes[gives[_id_give].id_home].zalog = false;
        homes[gives[_id_give].id_home].renter = null_adr;
        delete gives[_id_give];
    }
    
    function get_give(uint _id_give) public view returns(Give memory){
        return(gives[_id_give]);
    }
    
    function Create_Rent(uint _id_home, uint _count, uint _time) public Is_Owner(_id_home){
        require(homes[_id_home].zalog == false);
        require(homes[_id_home].renter == null_adr);
        rents[size_rent].id_home = _id_home;
        rents[size_rent].id_rent = size_rent;
        rents[size_rent].owner = homes[_id_home].owner;
        rents[size_rent].renter = null_adr;
        rents[size_rent].count = _count;
        rents[size_rent].time = _Time(_time);
        homes[_id_home].zalog = true;
        size_rent++;
    }
    
    function get_rent(uint _id_rent) public view returns(Rent memory){
        return(rents[_id_rent]);
    }
    
    function rent_renter(uint _id_rent) public payable{
        require(rents[_id_rent].owner != msg.sender);
        require(rents[_id_rent].owner != null_adr);
        require(homes[rents[_id_rent].id_home].zalog == true);
        require(homes[rents[_id_rent].id_home].renter == null_adr);
        require(rents[_id_rent].renter == null_adr);
        require(rents[_id_rent].count == msg.value);
        rents[_id_rent].renter = msg.sender;
    }
    
    function rent_cancel_renter(uint _id_rent) public payable{
        require(rents[_id_rent].renter == msg.sender);
        require(homes[rents[_id_rent].id_home].zalog == true);
        if (rents[_id_rent].renter != null_adr) {
            msg.sender.transfer(rents[_id_rent].count);
        }
        rents[_id_rent].renter = null_adr;
    }
    
    function rent_owner(uint _id_rent) public payable{
        require(rents[_id_rent].owner == msg.sender);
        require(homes[rents[_id_rent].id_home].owner == msg.sender);
        require(homes[rents[_id_rent].id_home].zalog == true);
        require(rents[_id_rent].owner != null_adr);
        require(rents[_id_rent].renter != null_adr);
        msg.sender.transfer(rents[_id_rent].count);
        homes[rents[_id_rent].id_home].renter = rents[_id_rent].renter;
        rents[_id_rent].time = block.timestamp + rents[_id_rent].time;
    }
    
    function rent_cancel_owner(uint _id_rent) public payable{
        require(rents[_id_rent].owner == msg.sender);
        require(homes[rents[_id_rent].id_home].owner == rents[_id_rent].owner);
        require(homes[rents[_id_rent].id_home].zalog == true);
        if (rents[_id_rent].renter != null_adr) {
            rents[_id_rent].renter.transfer(rents[_id_rent].count);
        }
        homes[rents[_id_rent].id_home].zalog = false;
        delete rents[_id_rent];
    }
    
    
    function rent_out(uint _id_rent) public Is_Owner(rents[_id_rent].id_home){
        require(rents[_id_rent].owner != null_adr, "Аренды не существует");
        require(rents[_id_rent].renter != null_adr, "Не имеется рентер");
        require(homes[rents[_id_rent].id_home].zalog == true);
        require(homes[rents[_id_rent].id_home].renter == rents[_id_rent].renter);
        require(rents[_id_rent].time < block.timestamp, "Срок аренды еще не истек");
        homes[rents[_id_rent].id_home].renter = null_adr;
        homes[rents[_id_rent].id_home].zalog = false;
        delete rents[_id_rent];
    }
    
    function Create_Deposit(uint _id_home, uint _count, uint _time) public Is_Owner(_id_home){
        require(homes[_id_home].zalog == false);
        require(homes[_id_home].renter == null_adr);
        deposits[size_deposit].id_home = _id_home;
        deposits[size_deposit].id_deposit = size_deposit;
        deposits[size_deposit].owner = homes[_id_home].owner;
        deposits[size_deposit].renter = null_adr;
        deposits[size_deposit].count = _count;
        deposits[size_deposit].time = _Time(_time);
        homes[_id_home].zalog = true;
        size_deposit++;
    }
    
    function get_deposit(uint _id_deposit) public view returns(Deposit memory){
        return(deposits[_id_deposit]);
    }
    
    function deposit_renter(uint _id_deposit) public payable{
        require(deposits[_id_deposit].owner != null_adr);
        require(deposits[_id_deposit].owner != msg.sender);
        require(homes[deposits[_id_deposit].id_home].zalog == true);
        require(deposits[_id_deposit].count == msg.value);
        require(deposits[_id_deposit].renter == null_adr);
        deposits[_id_deposit].renter = msg.sender;
    }
    
    function deposit_cancel_renter(uint _id_deposit) public payable{
        require(deposits[_id_deposit].renter == msg.sender);
        require(homes[deposits[_id_deposit].id_home].zalog == true);
        require(homes[deposits[_id_deposit].id_home].renter == null_adr);
        if (deposits[_id_deposit].renter != null_adr){
            msg.sender.transfer(deposits[_id_deposit].count);
        }
        deposits[_id_deposit].renter = null_adr;
    }
    
    function deposit_owner(uint _id_deposit) public payable{
        require(deposits[_id_deposit].owner == msg.sender);
        require(deposits[_id_deposit].renter != null_adr);
        require(homes[deposits[_id_deposit].id_home].renter == null_adr);
        msg.sender.transfer(deposits[_id_deposit].count);
        homes[deposits[_id_deposit].id_home].renter = deposits[_id_deposit].renter;
        deposits[_id_deposit].time = block.timestamp + deposits[_id_deposit].time;
    }
    
    function deposit_cancel_owner(uint _id_deposit) public payable{
        require(homes[deposits[_id_deposit].id_home].zalog == true);
        require(deposits[_id_deposit].owner == msg.sender);
        require(homes[deposits[_id_deposit].id_home].owner == msg.sender);
        if (deposits[_id_deposit].renter != null_adr){
            deposits[_id_deposit].renter.transfer(deposits[_id_deposit].count);
            homes[deposits[_id_deposit].id_home].renter == null_adr;
        }
        homes[deposits[_id_deposit].id_home].zalog = false;
        delete deposits[_id_deposit];
    }
    
    function deposit_return_owner(uint _id_deposit) public payable{
        require(deposits[_id_deposit].owner == msg.sender);
        require(deposits[_id_deposit].renter != null_adr);
        require(homes[deposits[_id_deposit].id_home].renter != null_adr);
        require(homes[deposits[_id_deposit].id_home].zalog == true);
        if(deposits[_id_deposit].time > block.timestamp){
            require(deposits[_id_deposit].count == msg.value);
            deposits[_id_deposit].renter.transfer(deposits[_id_deposit].count);
        }
        else{
            homes[deposits[_id_deposit].id_home].owner = deposits[_id_deposit].renter;
        }
        homes[deposits[_id_deposit].id_home].renter = null_adr;
        homes[deposits[_id_deposit].id_home].zalog = false;
        delete deposits[_id_deposit];
    }
    
    function deposit_return_renter(uint _id_deposit) public{
        require(homes[deposits[_id_deposit].id_home].renter == msg.sender);
        require(homes[deposits[_id_deposit].id_home].zalog == true);
        require(deposits[_id_deposit].owner != msg.sender);
        require(deposits[_id_deposit].renter == msg.sender);
        require(deposits[_id_deposit].time < now);
        homes[deposits[_id_deposit].id_home].owner = deposits[_id_deposit].renter;
        homes[deposits[_id_deposit].id_home].renter = null_adr;
        homes[deposits[_id_deposit].id_home].zalog = false;
        delete deposits[_id_deposit];
    }
    }
