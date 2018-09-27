import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';

const componentClass = 'rvt-footer';
const ulClass = 'rvt-footer__aux-links';
const liClass = 'rvt-footer__aux-item';

const footerNavLi = (child, index) =>
    <li key={index} className={liClass}>{child}</li>

const footerNav = (children) =>
    <ul className={ulClass}>
        {React.Children.map(children, footerNavLi)}
    </ul>

const Footer: React.SFC<React.HTMLAttributes<HTMLDivElement>> =
({ className, children, id = Rivet.shortuid(), ...attrs }) => (
    <footer id={id} role="contentinfo" className={classNames(componentClass, className)} {...attrs}>
        <div className="rvt-footer__copyright-lockup">
            <div className="rvt-footer__trident">
                <Icon name="trident-footer" />
            </div>
            <p><a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; {new Date().getFullYear()} The Trustees of <a href="https://www.iu.edu/">Indiana University</a></p>
        </div>
        {children && footerNav(children)}
    </footer>
);
Footer.displayName = 'Footer';

export default Footer;
