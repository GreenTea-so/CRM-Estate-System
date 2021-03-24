export const listAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_login",
				"type": "string"
			}
		],
		"name": "add_admin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_give",
				"type": "uint256"
			}
		],
		"name": "cancel_owner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_give",
				"type": "uint256"
			}
		],
		"name": "cancel_renter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_home",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_count",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "Create_Deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_home",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_renter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "Create_Give",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_home",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_count",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "Create_Rent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "deposit_cancel_owner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "deposit_cancel_renter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "deposit_owner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "deposit_renter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "deposit_return_owner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "deposit_return_renter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_give",
				"type": "uint256"
			}
		],
		"name": "Give_Renter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_rent",
				"type": "uint256"
			}
		],
		"name": "rent_cancel_renter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_rent",
				"type": "uint256"
			}
		],
		"name": "rent_owner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "z",
				"type": "uint256"
			}
		],
		"name": "IntegersAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_types",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_S",
				"type": "uint256"
			}
		],
		"name": "registr_home",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_login",
				"type": "string"
			}
		],
		"name": "registr_user",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_rent",
				"type": "uint256"
			}
		],
		"name": "rent_cancel_owner",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_rent",
				"type": "uint256"
			}
		],
		"name": "rent_out",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_rent",
				"type": "uint256"
			}
		],
		"name": "rent_renter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin_is",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_login",
				"type": "string"
			}
		],
		"name": "autorization_user",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_deposit",
				"type": "uint256"
			}
		],
		"name": "get_deposit",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_home",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_deposit",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address payable",
						"name": "renter",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContr.Deposit",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_give",
				"type": "uint256"
			}
		],
		"name": "get_give",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_give",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_home",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "renter",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContr.Give",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_home",
				"type": "uint256"
			}
		],
		"name": "get_home",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_home",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "renter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "types",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "zalog",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "S",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContr.Home",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_rent",
				"type": "uint256"
			}
		],
		"name": "get_rent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_home",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_rent",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address payable",
						"name": "renter",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContr.Rent",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_user",
				"type": "uint256"
			}
		],
		"name": "get_user",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "adr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id_user",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "log",
						"type": "string"
					}
				],
				"internalType": "struct MyContr.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "len_user",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "return_admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]