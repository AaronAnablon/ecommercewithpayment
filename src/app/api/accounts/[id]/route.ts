import connectMongoDB from '@/config/mongodb';
import Accounts, { AccountsDocument } from '@/config/models/accounts';
import { NextResponse, NextRequest } from 'next/server';

interface Params {
    id: string;
}

export async function PUT(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    try {
        const { id } = params;
        const { title, description } = await request.json();
        await connectMongoDB();
        await Accounts.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ message: 'Accounts updated' }, { status: 200 });
    } catch (error) {
        console.error('Error updating account:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    try {
        const { id } = params;
        await connectMongoDB();
        const account: AccountsDocument | null = await Accounts.findOne({ _id: id });

        if (!account) {
            return NextResponse.json({ error: 'Account not found' }, { status: 404 });
        }

        return NextResponse.json({ account });
    } catch (error) {
        console.error('Error fetching account:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    try {
        const id = params;
        await connectMongoDB();
        const deletedAccount: AccountsDocument | null = await Accounts.findByIdAndDelete(id);

        if (!deletedAccount) {
            return NextResponse.json({ error: 'Account not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Account deleted' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting account:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
