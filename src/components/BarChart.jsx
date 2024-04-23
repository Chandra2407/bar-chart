import React, { useEffect, useRef, useState } from 'react'

const maxSales = 40000
const divider = 10000
const countOfYAxis = Number((maxSales / divider) + 1)
let yAxisArray = new Array(countOfYAxis).fill(0).map((e, index) => index * divider).reverse()

const BarChart = ({ data }) => {
    const chartWidthref = useRef(null);
    const [barWidth, setBarWidth] = useState(0)

    useEffect(() => {
        console.log('width', chartWidthref.current ? chartWidthref.current.offsetWidth : 0);
        setBarWidth(chartWidthref.current ? chartWidthref.current.offsetWidth : 0)
    }, [barWidth]);

    return (
        <div className='bar-chart-container'>
            <header className='header'>
                <h3>{data?.chart_title}</h3>
            </header>
            <section className='point-section'>
                <div className='point'>
                    <div className='marker profit'>
                    </div>
                    <p>Profit</p>
                </div>
                <div className='point'>
                    <div className='marker sales'>
                    </div>
                    <p>Sales</p>
                </div>
            </section>
            <section className='chart-section'>
                {
                    yAxisArray?.map((axis, index) => {
                        if (index === yAxisArray?.length - 1) return null
                        return (
                            <div className='y-axis'>
                                <div className='axis-number'>
                                    <p>{axis}</p>
                                </div>
                                <div className={`line`}></div>
                            </div>
                        )
                    })
                }
                <div className='y-axis'>
                    <div className='axis-number'>
                        <p>{0}</p>
                    </div>
                    <div ref={chartWidthref} className="line last">
                        <div className="bars-container">
                            {
                                data?.data?.map(bar => {
                                    return (
                                        <>
                                            <div className="bars"
                                                style={{
                                                    width: Number(barWidth / (data?.data?.length * 2)),
                                                    height: Number(bar?.sales / 100)
                                                }}
                                            >
                                                <div className='profit-bar'
                                                    style={{
                                                        height: Number(bar?.profit / 100)
                                                    }}
                                                >
                                                </div>
                                                <div className="months">
                                                    <p>{bar.month}</p>
                                                </div>
                                            </div>
                                        </>

                                    )
                                })
                            }
                        </div>
                        <div className="months-container">
                            {
                                data?.data?.map(month => {
                                    return (
                                        <></>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BarChart