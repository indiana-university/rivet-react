import * as React from 'react'

export const svg16 = (className: string = "", node: React.ReactNode) =>
    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={className}>
        {node}
    </svg>


/****************
 * Interactions 
 ****************/

export const caretDown = (className?: string) =>
    svg16(className,
        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z" />
    );


export const close = (className?: string) =>
    svg16(className,
        <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z" />
    );


export const file = (className?: string) =>
    svg16(className,
        <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z" />
    );


export const menu = (className?: string) =>
    svg16(className,
        <g fill="currentColor">
            <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z" />
            <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z" />
            <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z" />
        </g>
    )


/****************
 * Alerts 
 ****************/

export const info = (className?: string) =>
    svg16(className,
        <g fill="currentColor">
            <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
            <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z" />
            <circle cx="8" cy="5" r="1" />
        </g>
    )

export const success = (className?: string) =>
    svg16(className,
        <g fill="currentColor">
            <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z" />
            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
        </g>
    )

export const warning = (className?: string) =>
    svg16(className,
        <g fill="currentColor">
            <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
            <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
        </g>
    )

export const error = (className?: string) =>
    svg16(className,
        <g fill="currentColor">
            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z" />
        </g>
    );

/****************
 * IU Tridents 
 ****************/

export const iuTridentHeader =
    <svg role="img" className="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
        <title id="iu-logo">Indiana University Logo</title>
        <rect width="41" height="48" fill="#900" />
        <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff" />
    </svg>

export const iuTridentFooter =
    <svg role="img" aria-labelledby="footer-trident" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
        <title id="footer-trident">IU Trident Logo</title>
        <polygon points="13.33 3.32 13.33 5.21 14.76 5.21 14.76 15.64 11.9 15.64 11.9 1.9 13.33 1.9 13.33 0 6.67 0 6.67 1.9 8.09 1.9 8.09 15.64 5.24 15.64 5.24 5.21 6.67 5.21 6.67 3.32 0 3.32 0 5.21 1.43 5.21 1.43 17.47 3.7 19.91 8.09 19.91 8.09 22.76 6.67 22.76 6.67 25.13 13.33 25.13 13.33 22.76 11.9 22.76 11.9 19.91 16.1 19.91 18.56 17.47 18.56 5.21 20 5.21 20 3.32 13.33 3.32" fill="#900" />
    </svg>

