import { useState } from 'react'
import { Link } from "react-router-dom"
import styles from './Home2.module.css'
import BookCard from '../components/BookCard'
import SecureBookReader from '../components/SecureBookReader'

const booksData = [
    {
        id: 1,
        title: "الخوارزميات",
        author: "برطم",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
        pdfUrl: "/books/Algo1.pdf" 
    },
    {
        id: 2,
        title: "الاحتمال",
        author: "يوسف خوري",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
        pdfUrl: "/books/Lecture1.pdf"
    },
];

function Home2() {
    const [activeTab, setActiveTab] = useState(0);
    
    const [readingBook, setReadingBook] = useState(null);

    const getTabClass = (index) => {
        return `${styles.navButton || ''} ${activeTab === index ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-500'}`;
    };

    const closeReader = () => {
        setReadingBook(null);
    };

    if (readingBook) {
        return (
            <div className="relative w-full h-screen bg-gray-900">
                <button 
                    onClick={closeReader}
                    className="absolute top-4 right-4 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 font-bold"
                >
                    X إغلاق الكتاب
                </button>
                
                <SecureBookReader pdfUrl={readingBook.pdfUrl} />
            </div>
        );
    }

    return (
        <div className={styles.mainContainer}>

            <header className={styles.header}>
                <div className={styles.logo}>اسم المنصة</div>
                <nav className={styles.navTabs}>
                    <button onClick={() => setActiveTab(0)} className={getTabClass(0)}>الرئيسية</button>
                    <button onClick={() => setActiveTab(1)} className={getTabClass(1)}>المتجر</button>
                    <button onClick={() => setActiveTab(2)} className={getTabClass(2)}>من نحن</button>
                    <button onClick={() => setActiveTab(3)} className={getTabClass(3)}>تواصل معنا</button>
                </nav>
               <Link to="/login" className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition">
                    تسجيل دخول
                </Link>
            </header>

            <div className={styles.sliderWindow}>
                <div 
                    className={styles.sliderTrack} 
                    style={{ transform: `translateX(${activeTab * 100}%)` }}
                >

                    <section className={styles.slideSection} style={{ background: 'linear-gradient(to bottom, #ffffff, #eff6ff)' }}>
                        <h1 className={styles.heroTitle}>القراءة أصبحت <span className="text-blue-600">أسهل</span></h1>
                        <p className={styles.heroSubtitle}>
                            مكتبة رقمية متكاملة تضع بين يديك آلاف الكتب العربية والعالمية.
                            تصميم بسيط، تصفح سريع، وقراءة ممتعة.
                        </p>                        
                        <button onClick={() => setActiveTab(1)} className={styles.actionButton}>تصفح الكتب الآن</button>
                    </section>


                    <section className={styles.slideSection} style={{ backgroundColor: '#f0f9ff', overflowY: 'auto' }}>
                        <div className="container mx-auto py-10 px-4">
                            <h2 className="text-3xl font-bold mb-2 text-blue-900">المتجر الإلكتروني</h2>
                            <p className="text-gray-600 mb-10">اختر كتابك وابدأ القراءة فوراً بأمان عالي.</p>
                            
                            <div className="flex flex-wrap justify-center gap-8 pb-20">
                                {booksData.map((book) => (
                                    <BookCard 
                                        key={book.id}
                                        title={book.title}
                                        author={book.author}
                                        coverImage={book.cover}
                                        onRead={() => setReadingBook(book)}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>


                    
                    <section className={styles.slideSection} style={{ backgroundColor: '#fff' }}>
                        <h2 className="text-4xl font-bold mb-4 text-green-700">من نحن؟</h2>
                        <p className="max-w-xl text-lg text-gray-600">
                            نحن فريق من الشباب الشغوفين بالتقنية والقراءة، نسعى لبناء أكبر منصة عربية للكتب الإلكترونية المحمية.
                        </p>
                    </section>


                    <section className={styles.slideSection} style={{ backgroundColor: '#abd3bcff' }}>
                        <h2 className="text-4xl font-bold mb-4 text-blue-600">تواصل معنا</h2>
                        <form className="flex flex-col gap-4 w-full max-w-md">
                            <input type="text" placeholder="اسمك" className="p-3 border rounded" />
                            <input type="email" placeholder="بريدك الإلكتروني" className="p-3 border rounded" />
                            <button className="w-fit mx-auto bg-white text-blue-600 py-2 px-10 rounded hover:bg-blue-600 hover:text-white font-bold transition">
                                 إرسال
                            </button>
                        </form>
                    </section>

                </div>
            </div>

            <footer className={styles.footer}>
                <p>© 2026 اسم المنصة - جميع الحقوق محفوظة</p>
            </footer>

        </div>
    )
}

export default Home2