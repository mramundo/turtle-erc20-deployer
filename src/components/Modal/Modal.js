import React from 'react'
import SecondaryButton from '../SecondaryButton'
import SubTitle from '../SubTitle'

const Modal = ({ title, content, opened, onClickDismissHandler }) => {
    return opened ? (
        <div className="fixed z-10 inset-0 overflow-y-hidden">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <div
                    className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all m-auto sm:align-middle sm:max-w-lg sm:w-full rounded-3xl bg-white"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 sm:mt-0 sm:text-left">
                                <SubTitle text={title}></SubTitle>
                                {content}
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 flex flex-row-reverse">
                        <SecondaryButton
                            text={'Cancel'}
                            additionalClasses="modal-dismiss"
                            onClickHandler={onClickDismissHandler}
                        ></SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    )
}

export default Modal
