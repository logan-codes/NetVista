import { Outlet } from 'react-router-dom';
import Header from '@/components/ui/header'; 
import Footer from '@/components/ui/footer';

export function AppLayout() {
    return (
        <div>
            <Header /> 
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}
