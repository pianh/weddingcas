import Product from '@/components/common/Product';
import SocialIcon from '@/components/common/SocialIcon';
import { SwiperImage } from '@/components/common/SwiperImg';
import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Shop() {
    return (
        <main>
            <div className="shop__wrapper">
                <div className="container-fluid">
                    <div className="shop__cate">
                        <span className="-level-1">Home</span>
                        <span className="-level-3">/ Shop</span>
                    </div>
                    <div className="shop__content">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-9">
                                <div className="shop__content-left">
                                    <div className="shop__nav">
                                        <span>Showing 1–9 of 32 results</span>
                                        <div className="shop__sort">
                                            <select>
                                                <option>Default sorting...</option>
                                                <option>Sort by popularity</option>
                                                <option>Sort by popularity</option>
                                                <option>Sort by popularity</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop__product">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="product__wrapper">
                                                <div className="product__img">
                                                    <Link href="">
                                                        <Image
                                                            src="/assets/images/partners/shop-15-img-1.jpg"
                                                            alt="product"
                                                            width={310}
                                                            height={430}
                                                            objectFit="cover"
                                                        />
                                                    </Link>
                                                    <div className="product__img-effect"></div>
                                                </div>

                                                <div className="product__card mt-3 text-center">
                                                    <h3 className="section__title-4 m-0">INVITATIONS</h3>
                                                    <h4 className="section__des-4">$420.00</h4>
                                                    <span className="section__sub-title-4 product__add">
                                                        ADD TO CART
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="product__wrapper">
                                                <div className="product__img">
                                                    <Link href="">
                                                        <Image
                                                            src="/assets/images/partners/shop-18-img-1.jpg"
                                                            alt="product"
                                                            width={310}
                                                            height={430}
                                                            objectFit="cover"
                                                        />
                                                    </Link>
                                                    <div className="product__img-effect"></div>
                                                </div>

                                                <div className="product__card mt-3 text-center">
                                                    <h3 className="section__title-4 m-0">CAKE ICING</h3>
                                                    <h4 className="section__des-4">$420.00</h4>
                                                    <span className="section__sub-title-4 product__add">
                                                        ADD TO CART
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="product__wrapper">
                                                <div className="product__img">
                                                    <Link href="">
                                                        <Image
                                                            src="/assets/images/partners/shop-24-img-01.jpg"
                                                            alt="product"
                                                            width={310}
                                                            height={430}
                                                            objectFit="cover"
                                                        />
                                                    </Link>
                                                    <div className="product__img-effect"></div>
                                                </div>

                                                <div className="product__card mt-3 text-center">
                                                    <h3 className="section__title-4 m-0">LONG GOWN</h3>
                                                    <h4 className="section__des-4">$420.00</h4>
                                                    <span className="section__sub-title-4 product__add">
                                                        ADD TO CART
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="product__wrapper">
                                                <div className="product__img">
                                                    <Link href="">
                                                        <Image
                                                            src="/assets/images/partners/shop-25-img-01.jpg"
                                                            alt="product"
                                                            width={310}
                                                            height={430}
                                                            objectFit="cover"
                                                        />
                                                    </Link>
                                                    <div className="product__img-effect"></div>
                                                </div>
                                                <div className="product__card mt-3 text-center">
                                                    <h3 className="section__title-4 m-0">CARAMEL CAKE</h3>
                                                    <h4 className="section__des-4">$420.00</h4>
                                                    <span className="section__sub-title-4 product__add">
                                                        ADD TO CART
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="product__wrapper">
                                                <div className="product__img">
                                                    <Link href="">
                                                        <Image
                                                            src="/assets/images/partners/shop-25-img-01.jpg"
                                                            alt="product"
                                                            width={310}
                                                            height={430}
                                                            objectFit="cover"
                                                        />
                                                    </Link>
                                                    <div className="product__img-effect"></div>
                                                </div>
                                                <div className="product__card mt-3 text-center">
                                                    <h3 className="section__title-4 m-0">CARAMEL CAKE</h3>
                                                    <h4 className="section__des-4">$420.00</h4>
                                                    <span className="section__sub-title-4 product__add">
                                                        ADD TO CART
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="product__wrapper">
                                                <div className="product__img">
                                                    <Link href="">
                                                        <Image
                                                            src="/assets/images/partners/shop-25-img-01.jpg"
                                                            alt="product"
                                                            width={310}
                                                            height={430}
                                                            objectFit="cover"
                                                        />
                                                    </Link>
                                                    <div className="product__img-effect"></div>
                                                </div>
                                                <div className="product__card mt-3 text-center">
                                                    <h3 className="section__title-4 m-0">CARAMEL CAKE</h3>
                                                    <h4 className="section__des-4">$420.00</h4>
                                                    <span className="section__sub-title-4 product__add">
                                                        ADD TO CART
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-lg-3">
                                <div className="shop__content-right">
                                    <div className="shop__search">
                                        <input placeholder="Search..." />
                                        <RxMagnifyingGlass />
                                    </div>
                                    <div className="shop__category">
                                        <span className="shop__category-heading">CATEGORY</span>
                                        <div className="shop__category-list">
                                            <ul>
                                                <li>CEREMONY</li>
                                                <li>DECORATION</li>
                                                <li>DRESS</li>
                                                <li>EVENTS</li>
                                                <li>INVITATIONS</li>
                                                <li>MUSIC</li>
                                                <li>WEDDING</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shop__top-product">
                                        <span className="shop__top-product-heading">TOP PRODUCTS</span>
                                        <div className="shop__top-product-item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/blog/sidebar-blog-1.jpg"
                                                    width={250}
                                                    height={150}
                                                    objectFit="cover"
                                                    alt="post image"
                                                />
                                            </div>
                                            <div className="-heading">
                                                <h3>Write your love story </h3>
                                                <h4>December 29, 2022</h4>
                                            </div>
                                        </div>
                                        <div className="shop__top-product-item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/blog/sidebar-blog-2.jpg"
                                                    width={250}
                                                    height={150}
                                                    objectFit="cover"
                                                    alt="post image"
                                                />
                                            </div>
                                            <div className="-heading">
                                                <h3>Write your love story </h3>
                                                <h4>December 29, 2022</h4>
                                            </div>
                                        </div>
                                        <div className="shop__top-product-item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/blog/sidebar-blog-3.jpg"
                                                    width={250}
                                                    height={150}
                                                    objectFit="cover"
                                                    alt="post image"
                                                />
                                            </div>
                                            <div className="-heading">
                                                <h3>Write your love story </h3>
                                                <h4>December 29, 2022</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__share">
                                        <span className="blog__share-heading">SOCIAL SHARE</span>
                                        <SocialIcon />
                                    </div>
                                    <div className="blog__tags">
                                        <span className="blog__tags-heading">TAGS:</span>
                                        <ul>
                                            <li>
                                                <Link href="#">Bride </Link>
                                                <Link href="#">- Castle </Link>
                                                <Link href="#">- Church </Link>
                                                <Link href="#">- Decor </Link>
                                                <Link href="#">- Floral </Link>
                                                <Link href="#">- Groom </Link>
                                                <Link href="#">- Hall </Link>
                                                <Link href="#">- Lake </Link>
                                                <Link href="#">- Hall </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="shop__slider">
                        <div className="container-fluid">
                            <div className="shop__img-wrapper d-flex">
                                <SwiperImage />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

Shop.Layout = RootLayout;
