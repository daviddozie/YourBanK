import Button from "../../components/Button/Button";
const Main = () => {
    return (
        <div className="pt-[200px] w-[90%] mx-auto flex flex-wrap ">
            <div className="w-[50%]">
                <div className="flex items-center bg-[#262626] py-2 px-4 rounded-[61px] lg:max-w-[50%] gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16907 3.16563C7.85588 2.37578 8.86943 1.875 10 1.875C11.1305 1.875 12.144 2.37573 12.8308 3.16551C13.8751 3.09255 14.946 3.45513 15.7455 4.25464C16.545 5.05415 16.9076 6.12507 16.8347 7.16933C17.6243 7.85613 18.125 8.86957 18.125 10C18.125 11.1306 17.6242 12.1443 16.8342 12.8311C16.907 13.8751 16.5444 14.9458 15.7451 15.7452C14.9457 16.5446 13.875 16.9072 12.8309 16.8344C12.1441 17.6242 11.1306 18.125 10 18.125C8.8695 18.125 7.856 17.6243 7.1692 16.8345C6.12493 16.9075 5.054 16.5449 4.25448 15.7454C3.45496 14.9459 3.09238 13.8749 3.16534 12.8307C2.37565 12.1439 1.875 11.1304 1.875 10C1.875 8.86951 2.37571 7.85602 3.16546 7.16921C3.09258 6.12504 3.45517 5.05423 4.25462 4.25478C5.05406 3.45533 6.12489 3.09274 7.16907 3.16563ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z" fill="#CAFF33" />
                    </svg>
                    <div>
                        <p className="font-[300] text-sm text-white">No LLC Required, No Credit Check.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[38px] font-[500] text-white leading-[150%] lg:max-w-[90%] pt-5">Welcome to YourBank
                        Empowering Your <span className="text-[#CAFF33]">Financial Journey</span>
                    </h1>
                </div>
                <div>
                    <p className="text-white font-[300] text-[16px] lg:max-w-[] leading-[150%] pb-10 pt-2">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                </div>
                <div className="cursor-pointer w-[25%]">
                    <Button
                        label='Open Account'
                        type='button'
                    />
                </div>
            </div>
            <div className="w-[50%] flex justify-center">
                <div className="w-[80%] border-[0.689px] border-solid border-[#262626] bg-card p-[35px] rounded-[10.404px]">
                    <div className="relative">
                        <p className="text-white text-[18px] font-[500]">Your Transactions</p>
                        <div className="bg-[#1C1C1C] border-[0.867px] border-solid border-[#262626] rounded-[10.404px] py-3.5 px-5 flex justify-between items-end mt-4 absolute z-[100] w-[100%]">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#CAFF33] w-8 h-8 rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8756 2.32065C13.5823 2.63646 13.6006 3.1302 13.9164 3.42345L16.1018 5.45273L7.16427 5.45273C6.73331 5.45273 6.38394 5.8021 6.38394 6.23307C6.38394 6.66403 6.73331 7.0134 7.16427 7.0134L16.1018 7.0134L13.9164 9.04268C13.6006 9.33593 13.5823 9.82967 13.8756 10.1455C14.1688 10.4613 14.6625 10.4796 14.9784 10.1863L18.6199 6.80489C18.7789 6.65724 18.8693 6.45005 18.8693 6.23306C18.8693 6.01608 18.7789 5.80889 18.6199 5.66124L14.9784 2.2798C14.6625 1.98655 14.1688 2.00484 13.8756 2.32065ZM7.21587 10.6442C6.92262 10.3284 6.42888 10.3101 6.11307 10.6033L2.47152 13.9848C2.31252 14.1324 2.22217 14.3396 2.22217 14.5566C2.22217 14.7736 2.31252 14.9808 2.47152 15.1284L6.11307 18.5099C6.42888 18.8031 6.92262 18.7848 7.21587 18.469C7.50913 18.1532 7.49084 17.6595 7.17503 17.3662L4.98965 15.3369H13.9272C14.3581 15.3369 14.7075 14.9876 14.7075 14.5566C14.7075 14.1256 14.3581 13.7763 13.9272 13.7763H4.98965L7.17503 11.747C7.49084 11.4537 7.50913 10.96 7.21587 10.6442Z" fill="#1C1C1C" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-[300] text-[15.607px] text-white">Transaction</p>
                                    <p className="font-[400] text-[17.341px] text-white">Joel Kenley</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[21px] font-[500] text-white">-$68.00</p>
                            </div>
                        </div>
                        <div className="flex justify-center lin">
                            <div className="bg-[#1C1C1C] border-[0.867px] border-solid border-[#262626] rounded-[10.404px] py-3.5 px-5 flex justify-between items-end absolute w-[90%] top-[98px] z-[99]">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#CAFF33] w-8 h-8 rounded-full flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8756 2.32065C13.5823 2.63646 13.6006 3.1302 13.9164 3.42345L16.1018 5.45273L7.16427 5.45273C6.73331 5.45273 6.38394 5.8021 6.38394 6.23307C6.38394 6.66403 6.73331 7.0134 7.16427 7.0134L16.1018 7.0134L13.9164 9.04268C13.6006 9.33593 13.5823 9.82967 13.8756 10.1455C14.1688 10.4613 14.6625 10.4796 14.9784 10.1863L18.6199 6.80489C18.7789 6.65724 18.8693 6.45005 18.8693 6.23306C18.8693 6.01608 18.7789 5.80889 18.6199 5.66124L14.9784 2.2798C14.6625 1.98655 14.1688 2.00484 13.8756 2.32065ZM7.21587 10.6442C6.92262 10.3284 6.42888 10.3101 6.11307 10.6033L2.47152 13.9848C2.31252 14.1324 2.22217 14.3396 2.22217 14.5566C2.22217 14.7736 2.31252 14.9808 2.47152 15.1284L6.11307 18.5099C6.42888 18.8031 6.92262 18.7848 7.21587 18.469C7.50913 18.1532 7.49084 17.6595 7.17503 17.3662L4.98965 15.3369H13.9272C14.3581 15.3369 14.7075 14.9876 14.7075 14.5566C14.7075 14.1256 14.3581 13.7763 13.9272 13.7763H4.98965L7.17503 11.747C7.49084 11.4537 7.50913 10.96 7.21587 10.6442Z" fill="#1C1C1C" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-[300] text-[15.607px] text-white">Transaction</p>
                                        <p className="font-[400] text-[17.341px] text-white">Mark Smith</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[21px] font-[500] text-white">-$68.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;