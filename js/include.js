const header = document.getElementsByTagName('header')[0];
if($('#wrap').hasClass('login')) {
    header.innerHTML = '<div class="header-gnb">' +
    '    <div class="inner">' +
    '        <div class="logo"><a href="">U+ 파트너포털</a></div>' +
    '        <div class="gnb"></div>' +
    '    </div>' +
    '</div>';
}
else if($('#wrap').hasClass('asso')) {
    header.innerHTML = '<div class="header-gnb">' +
    '    <div class="inner">' +
    '        <div class="logo"><a href="">U+ 파트너포털</a></div>' +
    '        <div class="gnb"></div>' +
    '    </div>' +
    '</div>';
}
else if($('#wrap').hasClass('login1')) {
    header.innerHTML = '<div class="header-util">' +
    '        <ul class="util">' +
    '            <li><a href="">로그인</a></li>' +
    '            <li><a href="">파트너 회원가입</a></li>' +
    '        </ul>' +
    '    </div>' +
    '<div class="header-gnb">' +
    '    <div class="inner">' +
    '        <div class="logo"><a href="">U+ 파트너포털</a></div>' +
    '        <div class="gnb"></div>' +
    '        <div class="aside"><a href="">비즈마켓 <span class="mo-hide">바로가기</span></a></div>' +
    '    </div>' +
    '</div>';
} 
else if($('#wrap').hasClass('join')) {
    header.innerHTML = '<div class="header-gnb">' +
    '    <div class="inner">' +
    '        <div class="logo"><a href="">U+ 파트너포털</a></div>' +
    '        <div class="gnb"></div>' +
    '        <div class="aside"><a href="">비즈마켓 <span class="mo-hide">바로가기</span></a></div>' +
    '    </div>' +
    '</div>';
} 
else if($('#wrap').hasClass('per_rule')) {
    header.innerHTML = '<div class="header-gnb">' +
    '    <div class="inner">' +
    '        <div class="logo"><a href="">U+ 파트너포털</a></div>' +
    '        <div class="gnb"></div>' +
    '        <div class="aside"><a href="">비즈마켓 <span class="mo-hide">바로가기</span></a></div>' +
    '    </div>' +
    '</div>';
} 
else {
    header.innerHTML = '<div class="header-util">' +
    '        <ul class="util">' +
    '            <li><span class="badge adm">관리자 ID</span><span class="badge rep">대표 ID</span><a href="IA_PP_P-M.html">홍길동</a> 님</li>' +
    '            <li><a href="">로그아웃</a></li>' +
    '        </ul>' +
    '    </div>' +
    '    <div class="header-gnb">' +
    '        <div class="inner">' +
    '            <div class="logo"><a href="">U+ 파트너포털</a></div>' +
    '            <div class="gnb">' +
    '                <ul class="gnb-list">' +
    '                    <li class="m1"><a href="">서비스관리</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="">서비스 관리</a></li>' +
    '                                <li><a href="">평점</a></li>' +
    '                                <li><a href="">자주하는 질문</a></li>' +
    '                                <li><a href="">추가정보</a>' +
    '                                    <div class="lnb-menu-wrap">' +
    '                                        <ul class="lnb-menu-list">' +
    '                                            <li><a href="">도입성공 사례</a></li>' +
    '                                            <li><a href="">보도자료</a></li>' +
    '                                            <li><a href="">자료실 관리</a></li>' +
    '                                            <li><a href="">이벤트</a></li>' +
    '                                            <li><a href="">공지사항 관리</a></li>' +
    '                                        </ul>' +
    '                                    </div>' +
    '                                </li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="m2"><a href="">영업활동관리</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="">견적문의관리</a></li>' +
    // '                                <li><a href="">무료체험관리</a></li>' +
    '                                <li><a href="">체험신청관리</a></li>' +
    '                                <li><a href="">고객문의상담</a></li>' +
    // '                                <li><a href="">영상상담관리</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="m3"><a href="">판매관리</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="">진행현황</a>' +
    '                                    <div class="lnb-menu-wrap">' +
    '                                        <ul class="lnb-menu-list">' +
    '                                            <li><a href="">청약관리</a></li>' +
    '                                            <li><a href="">청약변경관리</a></li>' +
    '                                        </ul>' +
    '                                    </div>' +
    '                                </li>' +
    '                                <li><a href="">판매현황</a></li>' +
    '                                <li><a href="">정산관리</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="m4"><a href="">일반관리</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="">계정관리</a></li>' +
    // '                                <li><a href="">권한관리</a></li>' +
    // '                                <li><a href="">API관리</a></li>' +
    // '                                <li><a href="">알림설정</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="m5"><a href="">파트너지원</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="">판매자가이드</a></li>' +
    '                                <li><a href="">공지사항</a></li>' +
    '                                <li><a href="">자주하는 질문</a></li>' +
    '                                <li><a href="">1:1문의하기</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                </ul>' +
    '            </div>' +
    '            <div class="aside"><a href="">비즈마켓 바로가기</a></div>' +
    '        </div>' +
    '    </div>' +
    '    <button class="btn-menu pc-hide"><span>메뉴</span></button>' +
    '        <div class="mo-menu pc-hide">' +
    '            <div class="mo-header">' +
    '                <div class="log-info"><span class="badge adm">관리자 ID</span><span class="badge rep">대표 ID</span><strong>홍길동</strong>님</div>' +
    '                <ul class="util"> ' +       
    '                    <li class="logout"><a href="">로그아웃</a></li>' +
    '                    <li class="mypage"><a href="">마이페이지</a></li>' +
    '                </ul>' +
    '            </div>' +
    '            <div class="mo-gnb">' +
    '                <ul class="gnb">' +                 
    '                    <li class="menu-item"><a href="" class="lnk">대시보드</a></li>' +
    '                    <li class="menu-item"><a href="">영업활동관리</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +    
    '                                <li><a href="">견적문의관리</a></li>' +
    '                                <li><a href="">체험신청관리</a></li>' +
    '                                <li><a href="">고객문의상담</a></li>' +
    '                                <li><a href="">영상상담관리</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="menu-item"><a href="">판매관리</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="" class="lnb-btn">진행현황</a>' +
    '                                    <div class="lnb-menu-wrap">' +
    '                                        <ul class="lnb-menu-list">' +
    '                                            <li><a href="">청약관리</a></li>' +
    '                                            <li><a href="">청약변경관리</a></li>' +
    '                                        </ul>' +
    '                                    </div>' +
    '                                </li>' +
    '                                <li><a href="">판매현황</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="menu-item"><a href="">파트너지원</a>' +
    '                        <div class="sub-menu-wrap">' +
    '                            <ul class="sub-menu-list">' +
    '                                <li><a href="">판매자가이드</a></li>' +
    '                                <li><a href="">공지사항</a></li>' +
    '                                <li><a href="">자주하는 질문</a></li>' +
    '                                <li><a href="">1:1문의하기</a></li>' +
    '                            </ul>' +
    '                        </div>' +
    '                    </li>' +
    '                </ul>  ' +
    '            </div>' +
    '            <div class="mo-aside"><a href="">비즈마켓 바로가기</a></div>' +    
    '        </div>' +
    '        <div class="dimmed close"></div>';
}



const footer = document.getElementsByTagName('footer')[0];
footer.innerHTML = '<div class="foot">' +
'    <div class="footer-logo">LG U+</div>' +
'    <div class="footer-menu">' +
'        <ul>' +
'            <li><a href="javascript:;">이용약관</a></li>' +
'            <li><a href="javascript:;">개인정보처리방침</a></li>' +
'        </ul>' +
'        <div class="footer-link">' +
'            <div class="family-site">' +
'                <a href="javascript:;" class="btn-toggle">Family Site</a>' +
'                <ul>' +
'                    <li>' +
'                        <a href="https://www.lguplus.com/biz/" target="_blank" title="새창열림">LG U+ (기업)</a>' +
'                    </li>' +
'                    <li>' +
'                        <a href="https://bizmarket.uplus.co.kr/" target="_blank" title="새창열림">U+비즈마켓</a>' +
'                    </li>' +
'                </ul>' +
'            </div>' +
'            <ul class="sns-share">' +
'                <li>' +
'                    <a href="javascript:;" class="sns-tstory"></a>' +
'                </li>' +
'                <li>' +
'                    <a href="javascript:;" class="sns-blog"></a>' +
'                </li>' +
'                <li>' +
'                    <a href="javascript:;" class="sns-youtube"></a>' +
'                </li>' +
'            </ul>' +
'        </div>' +
'    </div>' +
'    <div class="foot-info">' +
'        <ul class="cp-info">' +
'            <li>㈜엘지유플러스</li>' +
'            <li>서울특별시 용산구 한강대로32</li>' +
'            <li>대표이사 황현식</li>' +
'            <li>사업자등록번호 220-81-39938</li>' +
'            <li>통신판매업신고 제 2015-서울용산00481호</li>' +
'            <li><a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208139938" target="_blank" title="새창열림">사업자정보확인</a></li>' +
'            <li>고객센터 <a href="tel:1544-7003">1544-7003</a></li>' +
'        </ul>' +
'        <div class="copyright">Copyright ⓒ LG Uplus Corp. All right reserved.</div>' +
'    </div>' +
'</div>';