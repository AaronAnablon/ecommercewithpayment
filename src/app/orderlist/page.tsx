"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

type Account = {
    id: string;
    name: string;
    email: string;
};

const Home = () => {
    const [accounts, setAccounts] = useState<Account[] | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const fetchAccounts = async () => {
        try {
            const response = await axios.get<{ accounts: Account[] }>(`/api/accounts`);
            setAccounts(response.data.accounts);
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    };

    const createAccount = async () => {
        try {
            const response = await axios.post(`/api/accounts`, { name, email });
            fetchAccounts();
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };

    useEffect(() => {
        fetchAccounts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Accounts</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Create Account</h2>
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-600">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                </div>
                <button
                    onClick={createAccount}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                >
                    Create Account
                </button>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Accounts List</h2>
                <ul className="list-disc list-inside">
                    {accounts?.map((account) => (
                        <li key={account.id} className="mb-2">
                            <strong className="font-bold">{account.name}</strong>: {account.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
