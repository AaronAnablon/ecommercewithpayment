import connectMongoDB from '@/config/mongodb';
import Accounts, { AccountsDocument } from '@/config/models/accounts';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const { name, email } = await request.json();
        await connectMongoDB();
        const newAccount: AccountsDocument = await Accounts.create({ name, email });
        return NextResponse.json({ message: 'Account Created', account: newAccount });
    } catch (error) {
        console.error('Error creating account:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


export async function GET(): Promise<NextResponse> {
    try {
        await connectMongoDB();
        const accounts: AccountsDocument[] = await Accounts.find();
        return NextResponse.json({ accounts });
    } catch (error) {
        console.error('Error fetching accounts:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
