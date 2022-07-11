import React from 'react';
import './index.scss';

function PrivacySection(props) {
    return (
        <div className='py-10'>
            <div className='text-white'>
                <ul className='privacy'>
                    <li>
                        <p className='header1'><span>1</span> Infomation Collcection And Use </p>
                        <p className='text1'>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    </li>
                    <li>
                        <p className='header1'><span>2</span> Types of Data Collected </p>
                        <ul>
                            <li>
                                <p className='subHeader1'><span>2.1</span> Personal Data </p>
                                <p className='text1'>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:
                                    <div className='flex mt-5 gap-4'>
                                        <div className='bg-[#263240] text-sm p-4 rounded w-[800px]'>
                                            <p className='border-b border-gray-400 px-2 py-2'>Email Address</p>
                                            <p className='border-b border-gray-400 px-2 py-2'>First name and last name</p>
                                            <p className='border-b border-gray-400 px-2 py-2'>Address, State, Province, <br/>ZIP/Postal code, City</p>
                                            <p className='border-b border-gray-400 px-2 py-2'>Cookies and Usage Data</p>
                                            <p className='border-b border-gray-400 px-2 py-2'>Usage Data</p>
                                        </div>
                                        <p>We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                    </div>
                                </p>
                            </li>
                            <li>
                                <p className='subHeader1'><span>2.2</span> Tracking & Cookies Data </p>
                                <p className='text1'>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                                <p className='text1'>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                                <p className='text1'>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                                <p className='text1 font-medium text-md'>Examples of Cookies we use:</p>
                                <p className='text1'>Session Cookies. We use Session Cookies to operate our Service.</p>
                                <p className='text1'>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</p>
                                <p className='text1'>Security Cookies. We use Security Cookies for security purposes.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className='header1'><span>3</span> Use of Data </p>
                        <p className='text1'>Stakingrewards.com uses the collected data for various purposes:</p>
                        <p className='text1 pl-4'>
                            To provide and maintain the Service <br/>
                            To notify you about changes to our Service <br/>
                            To allow you to participate in interactive features of our Service when you choose to do so <br/>
                            To provide customer care and support <br/>
                            To provide analysis or valuable information so that we can improve the Service <br/>
                            To monitor the usage of the Service <br/>
                            To detect, prevent and address technical issues 
                        </p>
                    </li>
                    <li>
                        <p className='header1'><span>4</span> Transfer Of Data </p>
                        <p className='text1'>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                        <p className='text1'>If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there.</p>
                        <p className='text1'>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                        <p className='text1'>Stakingrewards.com will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                    </li>
                    <li>
                        <p className='header1'><span>5</span> Disclosure Of Data </p>
                        
                        <ul>
                            <li>
                                <p className='subHeader1'><span>5.1</span> Legal Requirements </p>
                                <p className='text1'>Stakingrewards.com may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                                <p className='text1 pl-4'>
                                    To comply with a legal obligation <br/>
                                    To protect and defend the rights or property of Stakingrewards.com <br/>
                                    To prevent or investigate possible wrongdoing in connection with the Service <br/>
                                    To protect the personal safety of users of the Service or the public <br/>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            
        </div>
    );
}

export default PrivacySection;