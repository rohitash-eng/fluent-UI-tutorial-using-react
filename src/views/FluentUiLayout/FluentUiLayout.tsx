import { INavLinkGroup, Nav } from '@fluentui/react';
import { Button } from '@fluentui/react-components';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FluentUiLayout = () => {
    const links: any = [
        {
            name: 'Fluent UI Demo',
            links: [{
                name: 'Home',
                key: 'key1',
                url: '/',
                iconProps: {
                    iconName: 'home',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106FDE'
                        }

                    }
                }
            },
            {
                name: 'Students',
                key: 'key44',
                url: '/students',
                iconProps: {
                    iconName: 'AddGroup',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106FDE'
                        }

                    }
                }
            }, 
            {
                name: 'About Us',
                key: 'key2',
                url: '/about',
                iconProps: {
                    iconName: 'AddGroup',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106FDE'
                        }

                    }
                }
            }, {
                name: 'Products',
                key: 'key3',
                url: '/products',
                iconProps: {
                    iconName: 'productlist',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106FDE'
                        }

                    }
                },
                isExpanded: true,
                links: [{
                    name: 'Featured Products',
                    key: 'key4',
                    url: '/products/features',
                    iconProps: {
                        iconName: 'productlist',
                        styles: {
                            root: {
                                fontSize: 20,
                                color: '#106FDE'
                            }
    
                        }
                    }
                },{
                    name: 'News',
                    key: 'key5',
                    url: '/products/news',
                    iconProps: {
                        iconName: 'news',
                        styles: {
                            root: {
                                fontSize: 20,
                                color: '#106FDE'
                            }
    
                        }
                    }
                }]
            }]
        }
    ];
    const navStyle = {
        root: {
            backgroundColor: '#F5F5F5',
            paddingLeft: 0,
            height: '100vh',
            boxSizing: 'border-box',
            overflowY: 'auto',
        },
        group: {
            padding: '0 2px',
        },
        link: {
            padding: '10px',
        },
        linkIcon: {
            marginLeft: '5px',
        },
        selectedLink: {
            backgroundColor: '#106FDE',
            color: '#FFFFFF',
        },
        selectedLinkIcon: {
            color: '#FFFFFF',
        },
        linkDisabled: {
            backgroundColor: '#F5F5F5',
            color: '#CCCCCC',
        },
        linkDisabledIcon: {
            color: '#CCCCCC',
        },
        linkSubmenu: {
            marginLeft: '10px',
        },
        linkSubmenuIcon: {
            marginLeft: '5px',
        }
    }
    const navLeftDivStyle = {
        paddingLeft: 0,
        paddingRight: '1px'
    }
    const navRightDivStyle = {
        paddingLeft: 0
    }
    return (
        <>
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2" style={navLeftDivStyle}>
                        <Nav groups={links} styles={navStyle} />
                    </div>
                    <div style={navRightDivStyle} className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 main-element">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    );
};

export default FluentUiLayout;