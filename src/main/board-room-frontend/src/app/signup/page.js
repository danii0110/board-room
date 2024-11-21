import Link from "next/link";
import Image from "next/image";

export default function signup() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Image className="top-70" src="/logo.png" alt="로고 이미지" width={200} height={80} />
            </div>
            <div className="flex flex-col items-center text-xl">
                회원가입
            </div>
            <div className="flex flex-col items-center text-lg w-full text-customOrange">
                LET'S TALK ! LET'S SHARE !
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="useremail" className="block-mb-1">
                  이메일
                </label>
                <input  
                  id="useremail"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="block-mb-1">
                  비밀번호
                </label>
                <input 
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="passwordcheck" className="block-mb-1">
                  비밀번호 확인
                </label>
                <input 
                  id="passwordcheck"
                  type="passwordcheck"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="nickname" className="block-mb-1">
                  닉네임
                </label>
                <input 
                  id="nickname"
                  type="nickname"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-customOrange text-white py-2 px-4 rounded hover:bg-orange-400 top-10"
              >
                가입하기
              </button>
            </form>
        </div>
        
    )
}