import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../Rivet';

export interface FooterProps {
    children?: React.ReactNode
    id?: string,
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
                <svg role="img" aria-labelledby="footer-trident" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
                    <title id="footer-trident">IU Trident Logo</title>
                    <polygon points="13.33 3.32 13.33 5.21 14.76 5.21 14.76 15.64 11.9 15.64 11.9 1.9 13.33 1.9 13.33 0 6.67 0 6.67 1.9 8.09 1.9 8.09 15.64 5.24 15.64 5.24 5.21 6.67 5.21 6.67 3.32 0 3.32 0 5.21 1.43 5.21 1.43 17.47 3.7 19.91 8.09 19.91 8.09 22.76 6.67 22.76 6.67 25.13 13.33 25.13 13.33 22.76 11.9 22.76 11.9 19.91 16.1 19.91 18.56 17.47 18.56 5.21 20 5.21 20 3.32 13.33 3.32" fill="#900"/>
                </svg>
            </div>
            <p><a href="https://www.iu.edu/copyright/index.html">Copyright</a> &copy; {new Date().getFullYear()} The Trustees of <a href="https://www.iu.edu/">Indiana University</a></p>
        </div>
        {footerNav(nav)}
    </footer>
);
Footer.displayName = 'Footer';

export default Rivet.rivetize(Footer);
