import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.pageContainer}>

            {/* --- Section 1: Hero Section --- */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>
                    الصفحة الرئيسية للانطلاقة
                </h1>
                <p className={styles.heroText}>
                    أهلاً بك في منصة 
                    {/* Replaced $$$$$ with a styled badge */}
                    <span className={styles.placeholderBadge}>[اسم المنصة هنا]</span>
                    <br />
                    بوابتك الأولى للمعرفة والخدمات الرقمية المتكاملة.
                </p>
                <Link 
                    to="/books" 
                    className={styles.ctaButton} 
                    onClick={(e) => e.preventDefault()}
                    style={{ cursor: 'default', opacity: 0.6 }}
                >
                    تصفح الكتب الآن
                </Link>
            </section>


            {/* --- Section 2: About Us --- */}
            <section className={styles.aboutSection}>
                <div className={styles.sectionContainer}>
                    <h2 className={styles.sectionTitle}> من نحن</h2>
                    <div className={styles.separator}></div>
                    <p className={styles.aboutText}>
                        {/* Replaced lines with Arabic Lorem Ipsum text to simulate real paragraph look */}
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                    </p>
                </div>
            </section>


            {/* --- Section 3: E-book Section --- */}
            <section className={styles.ebookSection}>
                <div className={styles.sectionContainer}>
                    <h2 className={styles.sectionTitle}>اختر كتابك الإلكتروني</h2>
                    <div className={styles.ebookSeparator}></div>
                    
                    <div className={styles.ebookContent}>
                        <p className={styles.ebookText}>
                            تصفح مجموعة واسعة من الكتب الحصرية والمميزة التي قمنا بانتقائها بعناية لتناسب ذائقتك المعرفية.
                        </p>
                        <Link 
                            to="/shop" 
                            className={styles.libraryButton} 
                            onClick={(e) => e.preventDefault()}
                            style={{ cursor: 'default', opacity: 0.6 }}
                        >
                            الذهاب للمكتبة
                        </Link>
                    </div>
                </div>
            </section>


            {/* --- Section 4: Services --- */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionContainer}>
                    <h2 className={styles.sectionTitle}>خدمات أخرى</h2>
                    <div className={styles.servicesSeparator}></div>

                    <div className={styles.servicesGrid}>
                        
                        {/* Service Card 1 */}
                        <div className={styles.serviceCard}>
                            <h3 className={styles.serviceTitle}>
                                تصميم كتب، ملفات وإعلانات
                            </h3>
                            <p className={styles.serviceText}>
                                نقوم بتقديم خدمات تصميم احترافية تشمل أغلفة الكتب، وتنسيق الملفات الداخلية، وتصميم الإعلانات التسويقية الجذابة.
                            </p>
                        </div>

                        {/* Service Card 2 */}
                        <div className={styles.serviceCard}>
                            <h3 className={styles.serviceTitle}>
                                تدقيق وتحرير لغوي
                            </h3>
                            <p className={styles.serviceText}>
                                خدمة مراجعة النصوص لغوياً ونحوياً وإملائياً لضمان خلوها من الأخطاء ورفع جودة المحتوى العربي قبل النشر.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* --- Footer --- */ }
            <footer className={styles.footer}>
                <p>
                    © 2026 
                    <span className={styles.placeholderBadge}>[اسم الشركة]</span> 
                    - جميع الحقوق محفوظة
                </p>
            </footer>

        </div>
    )
}

export default Home