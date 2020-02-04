/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';

const componentClass = 'rvt-footer';
const liClass = 'rvt-footer__aux-item';

const footerNavLi = (child, index) =>
    <li key={index} className={liClass}>{child}</li>

const Footer: React.SFC<React.HTMLAttributes<HTMLDivElement>> =
({ className, children, id = Rivet.shortuid(), ...attrs }) => (
    <footer id={id} role="contentinfo" className={classNames.default(componentClass, className)} {...attrs}>
        <div className="rvt-footer__trident">
            <Icon name="trident-footer" />
        </div>
        <ul className="rvt-footer__aux-links">
            <li key="accessibility-footer-link" className={liClass}>
                <a href="https://accessibility.iu.edu/assistance/">Accessibility</a>
            </li>
            {React.Children.map(children, footerNavLi)}
            <li key="copyright-footer-link" className={liClass}>
                <a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; 2020 The Trustees of <a href="https://www.iu.edu/">Indiana University</a>
            </li>
        </ul>
    </footer>
);
Footer.displayName = 'Footer';

export default Footer;
