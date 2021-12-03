import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

        const navigation = [
            {name: 'ACCUEIL', href: '/', current: true},
            {name: 'TEST', href: '/test', current: true},
            {name: 'Captcha', href: '/recaptcha', current:true},
            {name: 'Admin', href: '/backoffice', current:true},
            
        ]


        return (
            <nav className={"Navbar"}>
                    {navigation.map((navElem, key) => (
                        <div key={key}>
                            <Link href={navElem.href}>
                                <a>{navElem.name}</a>
                            </Link>
                        </div>
                    ))}
            </nav>
        );
    }
;
export default Navbar;
