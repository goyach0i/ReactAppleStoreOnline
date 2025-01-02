import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isShopping, setIsShopping] = useState(false);
  const searchOpen = () => {
    if (isSearch === false) {
      setIsSearch(true);
      setIsShopping(false);
    } else {
      setIsSearch(false);
    }
  };

  const shoppingOpen = () => {
    if (isShopping === false) {
      setIsShopping(true);
      setIsSearch(false);
    } else {
      setIsShopping(false);
    }
  };

  return (
    <header className="w-full h-11 flex justify-center relative z-20">
      <div className="nav con h-full flex items-center justify-center">
        <ul className="w-full h-full flex items-center justify-between">
          <li className="h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              <img
                className="block w-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/29px-Apple_logo_black.svg.png"
                alt=""
              />
            </a>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              class="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              스토어
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        최신 제품 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Vision Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        악세서리
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      빠른링크
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        매장 찾기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        주문 상태
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Trade In
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        할부 방식
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      특별 할인 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        인증 리퍼비쉬 제품
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        교육
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        비즈니스
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              Mac
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      Mac 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac 모두 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        MacBook Air
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        MacBook Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iMac
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac mini
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac Studio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        디스플레이
                      </a>
                    </li>
                    <ul class="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          Mac 비교하기
                        </a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-xs">
                          PC에서 Mac으로 갈아타기
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      Mac 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Mac 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Mac 액세서리
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Trade In
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        할부 방식
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 Mac 관련 항목
                    </a>
                  </span>
                  <ul class="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Mac 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Mac을 위한 AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        MacOS Sequoia
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple이 만든 앱
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        연속성
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iCloud+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Mac과 비즈니스
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        교육
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              iPad
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      iPad 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad 모두 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad Air
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad mini
                      </a>
                    </li>

                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Pencil
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        키보드
                      </a>
                    </li>
                    <ul className="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          iPad 비교하기
                        </a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-xs">
                          iPad를 선택하는 이유
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      iPad 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPad 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPad 액세서리
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Trade In
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        할부 방식
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 iPad 관련 항목
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPad 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPad를 위한 AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPadOS 18
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple이 만든 앱
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iCloud+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        교육
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              iPhone
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      iPhone 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone 모두 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone 16 Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone 16
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone 15
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone 14
                      </a>
                    </li>

                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone SE
                      </a>
                    </li>
                    <ul class="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          iPhone 비교하기
                        </a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-xs">
                          안드로이드에서 갈아타기
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      iPhone 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPhone 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPhone 액세서리
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Trade In
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        할부 방식
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 iPhone 관련 항목
                    </a>
                  </span>
                  <ul className="flex flex-col">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPhone 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPhone을 위한 AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iOS 18
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple이 만든 앱
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPhone의 개인정보 보호
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iCloud+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple 지갑, Apple Pay
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Siri
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              Watch
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      Watch 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch 모두 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch Series 10
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch Ultra 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch SE
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch Nike
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch Hermès
                      </a>
                    </li>
                    <ul className="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          Watch 비교하기
                        </a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-xs">
                          Apple Watch를 선택하는 이유
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      Apple Watch 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Watch 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Watch Studio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Watch 밴드
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Watch 액세서리
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Trade In
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        할부 방식
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 Watch 관련 항목
                    </a>
                  </span>
                  <ul className="flex flex-col">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Watch 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        WatchOS 18
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple이 만든 앱
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              Vision
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      Vision 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Vision Pro 살펴보기
                      </a>
                    </li>
                    <ul className="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          가이드 동영상
                        </a>
                      </li>
                      <li>
                        <a href="#" className="font-bold text-xs">
                          제품 사양
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div class="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      class="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      Vision 쇼핑하기
                    </a>
                  </span>
                  <ul class="flex flex-col gap-1">
                    <li>
                      <a href="#" class="font-bold text-xs">
                        Apple Vision Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" class="font-bold text-xs">
                        Apple Vision Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" class="font-bold text-xs">
                        체험 예약하기
                      </a>
                    </li>
                    <li>
                      <a href="#" class="font-bold text-xs">
                        할부 방식
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      class="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 Vision 관련 항목
                    </a>
                  </span>
                  <ul class="flex flex-col">
                    <li>
                      <a href="#" class="font-bold text-xs">
                        AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" class="font-bold text-xs">
                        visionOS 2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              AirPods
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      AirPods 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        AirPods 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        AirPods 4
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        AirPods Pro 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        AirPods Max
                      </a>
                    </li>
                    <ul className="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          AirPods 비교하기
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      AirPods 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AirPods 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AirPods 액세서리
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 AirPods 관련 항목
                    </a>
                  </span>
                  <ul className="flex flex-col">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AirPods 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        헤드폰을 위한 AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Music
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              class="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              TV 및 홈
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      TV 및 홈 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        TV 및 홈 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple TV 4K
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      TV 및 홈 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple TV 4K 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Siri Remote 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        TV 및 홈 액세서리
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      그 외 TV 및 홈 관련 항목
                    </a>
                  </span>
                  <ul className="flex flex-col">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple TV 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AppleCare+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple TV 앱
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple TV+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        홈 앱
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Music
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Siri
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AirPlay
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              엔터테인먼트
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      엔터테인먼트 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        엔터테인먼트 살펴보기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple One
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple TV+
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Music
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Arcade
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Podcasts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Books
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Store
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      지원
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple TV+ 지원
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Music 지원
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              엑세서리
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      엑세서리 쇼핑하기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        엑세서리 모두 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Watch
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Apple Vision Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        AirPods
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        TV 및 홈
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      액세서리 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple 제작 정품
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Beats by Dr.Dre
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AirTag
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-li h-full flex items-center px-2 flex-grow">
            <a
              href="#"
              className="text-xs font-normal text-opacity-80 h-full flex items-center justify-center"
            >
              고객지원
            </a>
            <div className="sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex gap-20">
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      지원 상황 살펴보기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPhone
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Mac
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        iPad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Watch
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        AirPods
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        Music
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xl">
                        TV
                      </a>
                    </li>
                    <ul className="gap-1 mt-3">
                      <li>
                        <a href="#" className="font-bold text-xs">
                          지원 상황 살펴보기
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      도움받기
                    </a>
                  </span>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        커뮤니티
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        보장 상태 확인하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        수리
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        문의하기
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      유용한 주제
                    </a>
                  </span>
                  <ul className="flex flex-col">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AppleCare+ 구입하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple 계정 및 암호
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        청구 및 구독
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        손쉬운 사용
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            onClick={searchOpen}
            className="search-box block h-full flex items-center px-2 flex-grow"
          >
            <span className="w-full h-full flex items-center px-3 cursor-pointer justify-center">
              <i className="fas fa-search"></i>
            </span>
          </li>
          {!isSearch ? (
            ''
          ) : (
            <div className="search-sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex flex-col gap-10">
                <div className="input-box flex items-center gap-3">
                  <i className="fas fa-search opacity-60"></i>
                  <input
                    type="text"
                    placeholder="apple.com 검색하기"
                    className="text-2xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      지원 상황 살펴보기
                    </a>
                  </span>
                  <ul class="flex flex-col gap-1">
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Apple Store Online에서 쇼핑하기
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Mac
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        iPad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Watch
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        AirPods
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        Music
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold text-xs">
                        TV
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          <li
            onClick={shoppingOpen}
            className="shopping-box h-full flex items-center px-2 flex-grow"
          >
            <span className="w-full h-full flex items-center px-3 cursor-pointer justify-center">
              <i className="fas fa-shopping-bag"></i>
            </span>
          </li>
          {!isShopping ? (
            ''
          ) : (
            <div className="shopping-sub-menu mx-auto absolute w-full py-11 top-full left-0 z-10 border-b border-gray-200 bg-white">
              <div className="con mx-auto flex flex-col gap-10">
                <div className="shopping flex flex-col gap-10">
                  <span className="font-bold text-2xl">
                    장바구니가 비어 있습니다.
                  </span>
                  <span className="font-bold text-xs text-opacity-80 text-gray-600">
                    저장해둔 항목이 있는지 확인하려면
                    <a href="#" className="text-blue-600 underline">
                      로그인
                    </a>
                    하세요.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span>
                    <a
                      href="#"
                      className="text-xs font-normal text-opacity-80 text-gray-600"
                    >
                      내 프로필
                    </a>
                  </span>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a
                        href="#"
                        className="font-bold text-xs flex items-center gap-3"
                      >
                        <i className="fas fa-regular fa-box"></i>
                        <span>주문</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="font-bold text-xs flex items-center gap-3"
                      >
                        <i className="fa-regular fa-bookmark"></i>
                        <span>관심 목록</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-bold text-xs flex items-center gap-3"
                      >
                        <i className="fa-regular fa-address-card"></i>
                        <span>계정</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-bold text-xs flex items-center gap-3"
                      >
                        <i className="fa-regular fa-circle-user"></i>
                        <span>로그인</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
};

const Store = () => {
  return (
    <>
      <div className="con mx-auto pt-32 pb-16 flex justify-between">
        <div className="title flex">
          <h1 className="text-4xl font-semibold tracking-tighter leading-snug">
            <span className="sub-t">스토어. </span>
            <span className="text-gray-500">
              좋아하는 Apple 제품을
              <br />
              구입하는 가장 좋은 방법.
            </span>
          </h1>
        </div>
        <div className="search-menu flex flex-col gap-4">
          <div className="flex items-center gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202309?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050282"
              alt=""
            />
            <div className="flex flex-col">
              <div className="text-xs font-semibold">
                쇼핑 지원이 필요하다면?
              </div>
              <div>
                <a
                  href="#"
                  className="inquiry text-xs text-blue-600 font-semibold hover:underline"
                >
                  스페셜리스트에게 문의하세요
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 items-center">
            <img
              className="w-8 h-9"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/29px-Apple_logo_black.svg.png"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                Apple Store를 방문하세요
              </span>
              <span>
                <a
                  href="#"
                  className="inquiry text-xs text-blue-600 font-semibold hover:underline"
                >
                  가까운 매장 찾기
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 제품들 리스트 */}
      <div class="con product mx-auto pt-2 pb-16">
        <ul class="product-list flex items-center">
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">Mac</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723857138230"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">iPhone</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">iPad</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">Apple Watch</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">
                Apple Vision Pro
              </span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">AirPods</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">AirTag</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">Apple TV 4K</span>
            </a>
          </li>
          <li class="w-32 text-center px-4">
            <a href="#" class="flex flex-col items-center">
              <img
                class="block mx-auto pb-4 max-h-20"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174"
                alt=""
              />
              <span class="text-sm font-bold hover:underline">액세서리</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const NewSlider = () => {
  const Nslides = [
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1726165763242',
      text: [
        'iPhone 16 Pro',
        'Apple Intelligence 구동 가능. 각주 ∆',
        'W1,550,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-vision-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728499365473',
      text: ['Apple Vision Pro', '공간 컴퓨팅을 소개합니다.', '₩4,990,000부터'],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1724095131742',
      text: [
        'Apple Watch Series 10',
        '얇아진 두께. 더 커진 존재감.',
        '₩599,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-mini-202410_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1728400507038',
      text: [
        'iPad mini',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩749,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593',
      text: [
        'MacBook Pro',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩2,390,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-16-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1725661572506',
      text: [
        'iPhone 16',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩1,250,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1725655434794',
      text: [
        'Apple Watch Ultra 2',
        '블랙으로 계속되는 전력 질주.',
        '₩1,149,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1713308272877',
      text: [
        'iPad Air',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩899,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-mac-mini-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1729266524928',
      text: [
        'Mac mini',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩890,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816',
      text: [
        'iPad Pro',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩1,499,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595',
      text: [
        'MacBook Air',
        'Apple Intelligence 구동 가능. 각주 ∆',
        '₩1,390,000부터',
      ],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-imac-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728341291219',
      text: ['iMac', 'Apple Intelligence 구동 가능. 각주 ∆', '₩1,990,000부터'],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-se-202412_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1733898825090',
      text: ['Apple Watch SE', '부담 없이 빠져들다.', '₩329,000부터'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < Nslides.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider">
      <button className="leftBt" onClick={goPrev} disabled={currentIndex === 0}>
        &lt;
      </button>
      <div className="Nslides">
        {Nslides.slice(currentIndex, currentIndex + 3).map((slide, index) => {
          const actualIndex = currentIndex + index;

          const isHighlighted =
            actualIndex === 0 ||
            actualIndex === 4 ||
            actualIndex === 5 ||
            actualIndex === 6 ||
            actualIndex === 9;

          return (
            <div
              className={`slide ${isHighlighted ? 'highlight' : ''}`}
              key={index}
            >
              <img src={slide.image} alt={`Slide ${actualIndex + 1}`} />
              <div className="slide-text">
                <h3>{slide.text[0]}</h3>
                <p>{slide.text[1]}</p>
                <p>{slide.text[2]}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="rightBt"
        onClick={goNext}
        disabled={currentIndex >= Nslides.length - 3}
      >
        &gt;
      </button>
    </div>
  );
};

const Newproduct = () => {
  return (
    <>
      <div className="con mx-auto pt-32 flex justify-between">
        <div className="title flex">
          <h1 className="text-2xl font-semibold tracking-tighter leading-snug">
            <span className="sub-t">최신 제품. </span>
            <span className="text-gray-500">영원히 기억될 언박싱을 위해.</span>
          </h1>
        </div>
      </div>
      <div className="con mx-auto flex">
        <NewSlider />
      </div>
    </>
  );
};

const HelpSlider = () => {
  const Hslides = [
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-specialist-help-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728571564886',
      text: ['APPLE 스페셜리스트','스페셜리스트와 함께하는 일대일 온라인 쇼핑.'],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145',
      text: ['TODAY AT APPLE', 'Apple Store의 무료 세션에 참여해 보세요.', '최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을 알아보세요.'],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729720054089',
      text: ['일대일 가이드', '새로 산 기기와 더 친숙해지고 싶다면? 개인 맞춤 설정 세션에 참여해보세요.', '설정 및 데이터 전송 방법부터 최신 기능 사용법까지 온라인 세션에서 배워보세요.'],
    },
    {
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375544000',
      text: ['　','Genius Bar에서 직접 전문가의 도움을 받을 수 있습니다.'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < Hslides.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider">
      <button className="leftBt" onClick={goPrev} disabled={currentIndex === 0}>
        &lt;
      </button>
      <div className="Hslides">
        {Hslides.slice(currentIndex, currentIndex + 3).map((Hslides, index) => (
          <div className="slide" key={index}>
            <img src={Hslides.image} alt={`Pslides ${index + 1}`} />
            <div className="slide-text">
              <h3>{Hslides.text[0]}</h3>
              <p>{Hslides.text[1]}</p>
              <p>{Hslides.text[2]}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="rightBt"
        onClick={goNext}
        disabled={currentIndex >= Hslides.length - 3}
      >
        &gt;
      </button>
    </div>
  );
};

const Help = () => {
  return (
    <>
      <div className="con mx-auto pt-32 flex justify-between">
        <div className="title flex">
          <h1 className="text-2xl font-semibold tracking-tighter leading-snug">
            <span className="sub-t">도움의 손길. </span>
            <span className="text-gray-500">특별한 선물, 훈훈함까지 담아.</span>
          </h1>
        </div>
      </div>
      <div className="con mx-auto flex">
        <HelpSlider />
      </div>
    </>
  );
};

const Singular = () => {
  return (
    <>
      <div className="con mx-auto pt-32 flex justify-between">
        <div className="title flex">
          <h1 className="text-2xl font-semibold tracking-tighter leading-snug">
            <span className="sub-t">남다른 Apple Store. </span>
            <span className="text-gray-500">이곳에서 쇼핑해야 하는 더욱더 많은 이유.</span>
          </h1>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div id="wrap">
      <Header />
      <section className="section-1 w-full">
        <Store />
        <Newproduct />
        <Help />
        <Singular />
      </section>
    </div>
  );
}

export default App;
