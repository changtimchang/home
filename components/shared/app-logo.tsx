import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { lusitnan } from './fonts'
import { APP_NAME } from '@/lib/constants'

export default function AppLogo() {
  return (
    <Link href="/" className='flex-start'>
            <div
                className={`${lusitnan.className} flex flex-row items-end space-x-2`}
            >
                <Image
                    src="/img/logo.png"
                    width={32}
                    height={32}
                    alt={`${APP_NAME} logo`}
                    priority
                />
                <span className="text-xl">{APP_NAME}</span>
            </div>
        </Link>
  )
}
