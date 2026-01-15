import { useState } from 'react' // 1. Import useState
import { Link } from "react-router-dom" // We keep Link only for Login/Logout if needed
import styles from './Home2.module.css'

function Home2() {
    // State to track which tab is active (0 = Home, 1 = Shop, 2 = About, 3 = Contact)
    const [activeTab, setActiveTab] = useState(0);

    // Helper function to check if a tab is active
    const getTabClass = (index) => {
        return `${styles.navButton} ${activeTab === index ? styles.active : ''}`;
    };

    return (
        <div className={styles.mainContainer}>

            {/* --- Header --- */}
            <header className={styles.header}>
                <div className={styles.logo}>اسم المنصة</div>

                <nav className={styles.navTabs}>
                    {/* Buttons update the state instead of navigating */}
                    <button onClick={() => setActiveTab(0)} className={getTabClass(0)}>الرئيسية</button>
                    <button onClick={() => setActiveTab(1)} className={getTabClass(1)}>المتجر</button>
                    <button onClick={() => setActiveTab(2)} className={getTabClass(2)}>من نحن</button>
                    <button onClick={() => setActiveTab(3)} className={getTabClass(3)}>تواصل معنا</button>
                </nav>

                <Link to="/login" className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition">
                    تسجيل دخول
                </Link>
            </header>


            {/* --- SLIDER AREA --- */}
            <div className={styles.sliderWindow}>
                {/* Logic: Move the track based on activeTab.
                    In RTL Flexbox: Item 0 is rightmost. Item 1 is to its left.
                    To show Item 1, we translate X by +100%.
                    To show Item 2, we translate X by +200%.
                */}
                <div 
                    className={styles.sliderTrack} 
                    style={{ transform: `translateX(${activeTab * 100}%)` }}
                >

                    {/* SLIDE 0: HOME */}
                    <section className={styles.slideSection} style={{ background: 'linear-gradient(to bottom, #ffffff, #eff6ff)' }}>
                        <h1 className={styles.heroTitle}>
                            القراءة أصبحت <span className="text-blue-600">أسهل</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            مكتبة رقمية متكاملة تضع بين يديك آلاف الكتب العربية والعالمية.
                            تصميم بسيط، تصفح سريع، وقراءة ممتعة.
                        </p>
                        <button onClick={() => setActiveTab(1)} className={styles.actionButton}>
                            تصفح الكتب الآن
                        </button>
                    </section>


                    {/* SLIDE 1: SHOP (Placeholder Content) */}
                    <section className={styles.slideSection} style={{ backgroundColor: '#f0f9ff' }}>
                        <h2 className="text-4xl font-bold mb-4 text-blue-800">المتجر الإلكتروني</h2>
                        <p className="text-gray-600 mb-8">هنا ستظهر قائمة الكتب المتاحة للشراء.</p>
                        {/* Demo Cards */}
                        <div className="flex gap-4">
                            <div className="w-40 h-60 bg-white shadow-md rounded-lg flex items-center justify-center">كتاب 1</div>
                            <div className="w-40 h-60 bg-white shadow-md rounded-lg flex items-center justify-center">كتاب 2</div>
                            <div className="w-40 h-60 bg-white shadow-md rounded-lg flex items-center justify-center">كتاب 3</div>
                        </div>
                    </section>


                    {/* SLIDE 2: ABOUT */}
                    <section className={styles.slideSection} style={{ backgroundColor: '#fff' }}>
                        <h2 className="text-4xl font-bold mb-4 text-green-700">من نحن؟</h2>
                        <p className="max-w-xl text-lg text-gray-600">
                            نحن فريق من الشباب الشغوفين بالتقنية والقراءة، نسعى لبناء أكبر منصة عربية للكتب الإلكترونية المحمية.
                        </p>
                    </section>


                    {/* SLIDE 3: CONTACT */}
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


            {/* --- Footer --- */}
            <footer className={styles.footer}>
                <p>© 2026 جميع الحقوق محفوظة لمنصة [اسم المنصة]</p>
            </footer>

        </div>
    )
}

export default Home2