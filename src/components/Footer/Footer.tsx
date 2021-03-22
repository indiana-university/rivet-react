/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';

interface FooterProps {
    /**
     * The Copyright year that appears in the footer.
     * @see https://rivet.iu.edu/components/navigation/footer/
     */
    copyrightYear?: number;
}

const componentClass = 'rvt-footer';
const liClass = 'rvt-footer__aux-item';
const footerNavLi = (child, index) =>
    <li key={index} className={liClass}>{child}</li>

const Footer: React.FunctionComponent<FooterProps & React.HTMLAttributes<HTMLDivElement>> =
({ className, children, id = Rivet.shortuid(), copyrightYear = new Date().getFullYear(), ...attrs }) => {
return (
    <footer id={id} role="contentinfo" className={classNames(componentClass, className)} {...attrs}>
        <div className="rvt-footer__trident">
            <Icon name="trident-footer" />
        </div>
        <ul className="rvt-footer__aux-links">
            <li key="accessibility-footer-link" className={liClass}>
                <a href="https://accessibility.iu.edu/assistance/">Accessibility</a>
            </li>
            {React.Children.map(children, footerNavLi)}
            <li key="copyright-footer-link" className={liClass}>
                <a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; {copyrightYear} The Trustees of <a href="https://www.iu.edu/">Indiana University</a>
            </li>
        </ul>
    </footer>
)};
Footer.displayName = 'Footer';

export default Footer;
