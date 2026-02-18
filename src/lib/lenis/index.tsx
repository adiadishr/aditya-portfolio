
'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

let lenis: Lenis | null = null

export function LenisProvider() {

    useEffect(() => {
        lenis = new Lenis({ autoRaf: true })
    }, [])

    return null
}

export function getLenis() {
    return lenis
}
