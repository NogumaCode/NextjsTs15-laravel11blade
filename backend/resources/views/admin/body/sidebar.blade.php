<div class="app-sidebar-menu">
    <div class="h-100" data-simplebar>

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <div class="logo-box">
                <a href="{{ route('dashboard') }}" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="{{ asset('backend/assets/images/logo-sm.png') }}" alt="" height="22">
                    </span>
                    <span class="logo-lg">
                        <img src="{{ asset('backend/assets/images/logo-light.png') }}" alt="" height="24">
                    </span>
                </a>
                <a href="{{ route('dashboard') }}" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="{{ asset('backend/assets/images/logo-sm.png') }}" alt="" height="22">
                    </span>
                    <span class="logo-lg">
                        <img src="{{ asset('backend/assets/images/logo-dark.png') }}" alt="" height="24">
                    </span>
                </a>
            </div>

            <ul id="side-menu">

                <li class="menu-title">Menu</li>

                <li>
                    <a href="{{ route('dashboard') }}" class="tp-link">
                        <i data-feather="home"></i>
                        <span> Dashboard </span>
                    </a>
                </li>


                {{-- <li>
                    <a href="#sidebarDashboards" data-bs-toggle="collapse">
                        <i data-feather="home"></i>
                        <span> Dashboard </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarDashboards">
                        <ul class="nav-second-level">
                            <li>
                                <a href="index.html" class="tp-link">Analytical</a>
                            </li>
                            <li>
                                <a href="ecommerce.html" class="tp-link">E-commerce</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <!-- <li>
                        <a href="landing.html" target="_blank">
                            <i data-feather="globe"></i>
                            <span> Landing </span>
                        </a>
                    </li> -->

                <li class="menu-title">Pages</li>

                <li>
                    <a href="#sidebarAuth" data-bs-toggle="collapse">
                        <i data-feather="users"></i>
                        <span> Manage Slider </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarAuth">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('all.slider') }}" class="tp-link">All Slider</a>
                            </li>
                            <li>
                                <a href="{{ route('add.slider') }}" class="tp-link">Add Slider</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#sidebarError" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> Manage Sevices </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarError">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('all.service') }}" class="tp-link">All Service</a>
                            </li>
                            <li>
                                <a href="{{ route('add.service') }}" class="tp-link">Add Service</a>
                            </li>

                        </ul>
                    </div>
                </li>


                <li>
                    <a href="#GateWay" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> Manage GateWay </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="GateWay">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('gateway.one') }}" class="tp-link">Gateway One</a>
                            </li>
                            <li>
                                <a href="{{ route('gateway.two') }}" class="tp-link">Gateway Two</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#Testimonial" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> Manage Testimonial </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="Testimonial">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('all.testimonial') }}" class="tp-link">All Testimonial</a>
                            </li>
                            <li>
                                <a href="{{ route('add.testimonial') }}" class="tp-link">Add Testimonial</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#BlogCategory" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> BlogCategory </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="BlogCategory">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('blog.category') }}" class="tp-link">Blog Category</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#BlogPost" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> Blog Post </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="BlogPost">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('all.blog.post') }}" class="tp-link">All Blog Post </a>
                            </li>
                            <li>
                                <a href="{{ route('add.blog.post') }}" class="tp-link">Add Blog Post </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#Setting" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> Site Setting </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="Setting">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('site.setting') }}" class="tp-link">Site Setting </a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#About" data-bs-toggle="collapse">
                        <i data-feather="alert-octagon"></i>
                        <span> About Page </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="About">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('about.page') }}" class="tp-link">About Page </a>
                            </li>

                        </ul>
                    </div>
                </li>


                <li class="menu-title mt-2">General</li>

                <li>
                    <a href="#sidebarBaseui" data-bs-toggle="collapse">
                        <i data-feather="package"></i>
                        <span> Contact Page </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarBaseui">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{ route('contact.message') }}" class="tp-link">Contact Message </a>
                            </li>


                        </ul>
                    </div>
                </li>

                {{-- <li>
                    <a href="widgets.html" class="tp-link">
                        <i data-feather="aperture"></i>
                        <span> Widgets </span>
                    </a>
                </li> --}}

                {{-- <li>
                    <a href="#sidebarAdvancedUI" data-bs-toggle="collapse">
                        <i data-feather="cpu"></i>
                        <span> Extended UI </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarAdvancedUI">
                        <ul class="nav-second-level">
                            <li>
                                <a href="extended-carousel.html" class="tp-link">Carousel</a>
                            </li>
                            <li>
                                <a href="extended-notifications.html" class="tp-link">Notifications</a>
                            </li>
                            <li>
                                <a href="extended-offcanvas.html" class="tp-link">Offcanvas</a>
                            </li>
                            <li>
                                <a href="extended-range-slider.html" class="tp-link">Range Slider</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                {{-- <li>
                    <a href="#sidebarIcons" data-bs-toggle="collapse">
                        <i data-feather="award"></i>
                        <span> Icons </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarIcons">
                        <ul class="nav-second-level">
                            <li>
                                <a href="icons-feather.html" class="tp-link">Feather Icons</a>
                            </li>
                            <li>
                                <a href="icons-mdi.html" class="tp-link">Material Design Icons</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                {{-- <li>
                    <a href="#sidebarForms" data-bs-toggle="collapse">
                        <i data-feather="briefcase"></i>
                        <span> Forms </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarForms">
                        <ul class="nav-second-level">
                            <li>
                                <a href="forms-elements.html" class="tp-link">General Elements</a>
                            </li>
                            <li>
                                <a href="forms-validation.html" class="tp-link">Validation</a>
                            </li>
                            <li>
                                <a href="forms-quilljs.html" class="tp-link">Quilljs Editor</a>
                            </li>
                            <li>
                                <a href="forms-pickers.html" class="tp-link">Picker</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                {{-- <li>
                    <a href="#sidebarTables" data-bs-toggle="collapse">
                        <i data-feather="table"></i>
                        <span> Tables </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarTables">
                        <ul class="nav-second-level">
                            <li>
                                <a href="tables-basic.html" class="tp-link">Basic Tables</a>
                            </li>
                            <li>
                                <a href="tables-datatables.html" class="tp-link">Data Tables</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                {{-- <li>
                    <a href="#sidebarCharts" data-bs-toggle="collapse">
                        <i data-feather="pie-chart"></i>
                        <span> Apex Charts </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarCharts">
                        <ul class="nav-second-level">
                            <li>
                                <a href='charts-line.html'>Line</a>
                            </li>
                            <li>
                                <a href='charts-area.html'>Area</a>
                            </li>
                            <li>
                                <a href='charts-column.html'>Column</a>
                            </li>
                            <li>
                                <a href='charts-bar.html'>Bar</a>
                            </li>
                            <li>
                                <a href='charts-mixed.html'>Mixed</a>
                            </li>
                            <li>
                                <a href='charts-timeline.html'>Timeline</a>
                            </li>
                            <li>
                                <a href='charts-rangearea.html'>Range Area</a>
                            </li>
                            <li>
                                <a href='charts-funnel.html'>Funnel</a>
                            </li>
                            <li>
                                <a href='charts-candlestick.html'>Candlestick</a>
                            </li>
                            <li>
                                <a href='charts-boxplot.html'>Boxplot</a>
                            </li>
                            <li>
                                <a href='charts-bubble.html'>Bubble</a>
                            </li>
                            <li>
                                <a href='charts-scatter.html'>Scatter</a>
                            </li>
                            <li>
                                <a href='charts-heatmap.html'>Heatmap</a>
                            </li>
                            <li>
                                <a href='charts-treemap.html'>Treemap</a>
                            </li>
                            <li>
                                <a href='charts-pie.html'>Pie</a>
                            </li>
                            <li>
                                <a href='charts-radialbar.html'>Radialbar</a>
                            </li>
                            <li>
                                <a href='charts-radar.html'>Radar</a>
                            </li>
                            <li>
                                <a href='charts-polararea.html'>Polar</a>
                            </li>
                        </ul>
                    </div>
                </li> --}}

                <li>
                    <a href="#sidebarMaps" data-bs-toggle="collapse">
                        <i data-feather="map"></i>
                        <span> Maps </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarMaps">
                        <ul class="nav-second-level">
                            <li>
                                <a href="maps-google.html" class="tp-link">Google Maps</a>
                            </li>
                            <li>
                                <a href="maps-vector.html" class="tp-link">Vector Maps</a>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>

        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
</div>
