
import styles from './LoginPage.module.css';
import completeLogo from '../../images/completeLogo.png';
import { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const [mobile, setMobile] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState('');

    const handleSendOtp = (e) => {
        e.preventDefault()
        if (mobile.trim() === '1234567890' || mobile.trim() === '8247517346' ) {
            setShowOTP(true);
            setOtp('123456'); // Set static OTP
        } else {
            alert("Only registered number 1234567890 is allowed");
        }
    };


    const handleReSendOtp = (e) => {
        // e.preventDefault()
        alert("OTP resent to " + mobile);
        setOtp('123456'); // Reset OTP to 123456 on resend as well
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault()
        if (otp === '123456') {
            // alert("OTP verified successfully!");
            navigate('/welcome');
        } else {
            alert("Invalid OTP");
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.login}>
                    <div className={styles.logo}>
                        <img src={completeLogo} alt="" />
                    </div>
                    <div className={styles.loginbox}>
                        <div className={styles.loginContent}>
                            <h1 className={styles.title}>Welcome!</h1>
                            <h6 className={styles.text}>Login to Continue</h6>
                            <label htmlFor="" className={styles.label}>Mobile Number</label>
                            <form action="" onSubmit={(e) => handleSendOtp(e)}>
                                <input
                                    type="text"
                                    placeholder=""
                                    className={styles.input}
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    disabled={showOTP}
                                />
                                {!showOTP && (
                                    <button className={styles.button}
                                        // onClick={handleSendOtp}
                                        type='submit'
                                    >
                                        Send OTP
                                    </button>
                                )}
                            </form>

                            {showOTP && (
                                <>
                                    <form action="" onSubmit={(e) => handleVerifyOtp(e)}>
                                        <div className={styles.otps}>
                                            <label htmlFor="" className={styles.label}>Enter OTP</label>
                                            <OTPInput
                                                shouldAutoFocus
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                renderSeparator={<span> </span>}
                                                renderInput={(props) => (
                                                    <input className={styles.inputOtp} {...props} required />
                                                )}
                                            />
                                        </div>
                                        <button className={styles.button}
                                            type='submit'
                                        // onClick={handleVerifyOtp}
                                        >
                                            Verify OTP
                                        </button>
                                    </form>
                                    <p className={styles.resendText}>
                                        Didn’t receive OTP?{' '}
                                        <button className={styles.resendBtn} onClick={handleReSendOtp}>
                                            Resend
                                        </button>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <footer className={styles.footer}>
                    <div className={styles.footContent}>
                        <div className={styles.footerLinks}>
                            <a href="#">Terms and Conditions</a>
                            <span>|</span>
                            <a href="#">Privacy Policy</a>
                            <span>|</span>
                            <a href="#">Refunds</a>
                            <span>|</span>
                            <a href="#">Contact Us</a>
                        </div>
                        <hr />
                        <p className={styles.footerNote}>
                            Powered by <span className={styles.brand}>KERNN</span>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default LoginPage;
