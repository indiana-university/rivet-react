import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import * as svg from '../util/RivetIcons'

export interface FooterProps {
    nav?: Rivet.Nav[]
}

const componentClass = 'rvt-footer';
const ulClass = 'rvt-footer__aux-links';
const liClass = 'rvt-footer__aux-item';

/**
 * Render an unordered list of footer navigation links
 * @param nav Array of navigation objects
 */
const footerNav = (nav: Rivet.Nav[] = []) =>
    nav.length
    ? <ul className={ulClass}>
        {nav.map((n,i) => <li key={i} className={liClass}>{n.render()}</li>)}
      </ul>
    : null;

const Footer : React.SFC<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({ className, id = Rivet.shortuid(), nav, ...attrs }) => (
    <footer id={id} role="contentinfo" className={classNames(componentClass, className)} {...attrs}>
        <div className="rvt-footer__copyright-lockup">
            <div className="rvt-footer__trident">
                {svg.iuTridentFooter}
            </div>
            <p><a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; {new Date().getFullYear()} The Trustees of <a href="https://www.iu.edu/">Indiana University</a></p>
        </div>
        {footerNav(nav)}
    </footer>
);
Footer.displayName = 'Footer';

export default Footer;
