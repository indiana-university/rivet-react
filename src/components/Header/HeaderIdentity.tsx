import * as React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownGroup from '../Dropdown/DropdownGroup';

interface HeaderIdentityProps {
    /**
     * An optional user avatar which appears next to the username
     * @see https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    avatar?: string | React.ReactNode;
    /**
     * An optional action to take when the user logs out.  If provided a "log out" link will be included.
     * @see https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    onLogout?: () => void
    /**
     * The currently logged in user's username
     * @see https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    username: string;
}

const HeaderIdentity : React.SFC<HeaderIdentityProps & React.HTMLAttributes<HTMLDivElement>> = ({ avatar, children, onLogout, username }) => {
    const avatarIcon = avatar && <span className="rvt-header-id__avatar" aria-hidden="true">{avatar}</span>;
    const userLabel = <span className="rvt-header-id__user">{username}</span>;
    const label = <>{avatarIcon} {userLabel}</>;
    if(!children) {
        return (
            <div className="rvt-header-id">
                <div className="rvt-header-id__profile">
                    {label}
                </div>
                {onLogout && <a href="javascript:void(0)" className="rvt-header-id__log-out" onClick={onLogout}>
                    Log out
                </a>}
            </div>
        );    
    } else {
        return (
            <div className="rvt-header-id">
                <Dropdown label={label} variant="navigation" align="right" className="rvt-header-id__profile rvt-header-id__profile--has-dropdown" menuClass="rvt-header-id__menu">
                    {children}
                    
                    { onLogout && 
                        <DropdownGroup>
                            <a href="javascript:void(0)" onClick={onLogout}>
                                Log out
                            </a>
                        </DropdownGroup>                    
                    }
                </Dropdown>
            </div>
        );
    }
}
HeaderIdentity.displayName = 'HeaderIdentity';

export default HeaderIdentity;
