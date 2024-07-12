"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {signIn, signOut, useSession,  getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true
  const [providers, setProviders] = useState(null) //for authentication from next-auth
  const [toggleDropdown, setToggleDropdown] = useState(false); //for dropdown box

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center"><Image width={50} height={50} className="object-contain" src="/assets/images/logo.svg"></Image><p className="logo_text">NoteWhiz</p></Link>

      {/* pc nav */}
      <div className="sm:flex">
      <Link href="/create-prompt" className="blue_btn">Create Notes</Link>

        {/* {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="blue_btn">Create Post </Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
            <Link href="/profile"><Image width={40} height={40} className="rounded-full" src="/assets/images/user.svg"></Image></Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type="button" key={provider.name } onClick={() => {signIn(provider.id);}} className='black_btn'>
                  Sign In
              </button>
            ))}
          </>
        )} */}
      </div>

      {/* mob nav */}
      {/* <div className='sm:hidden flex relative'>
        <Image width={40} height={40} className="rounded-full" src="/assets/images/user.svg" onClick={() => setToggleDropdown((prev) => !prev)}></Image>
        <button type='button' onClick={() => {setToggleDropdown(false); signOut();}} className='mt-5 w-full blue_btn'>Sign Out</button>
        {isUserLoggedIn ? (
          <div className='flex'>
           <Image width={40} height={40} className="rounded-full" src="/assets/images/user.svg" onClick={() => setToggleDropdown((prev) => !prev)}></Image>
           <button type='button' onClick={() => {setToggleDropdown(false); signOut();}} className='mt-5 w-full blue_btn'>Sign Out</button>
           
            {toggleDropdown && (
              <div className='dropdown space-y-3 py-2'>
                <Link href='/profile' className='dropdown_link' onClick={() => setToggleDropdown(false)}> My Profile </Link>
                <Link href='/create-prompt'  className='dropdown_link' onClick={() => setToggleDropdown(false)}>Create Post</Link>
                <button type='button' onClick={() => {setToggleDropdown(false); signOut();}} className='mt-5 w-full blue_btn'>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button type='button' key={provider.name} onClick={() => {signIn(provider.id);}} className='blue_btn'> Sign in</button>
              ))}
          </>
        )}
      </div> */}

    </nav>
  )
}

export default Nav
