"use client";

import React, { useEffect, useRef } from 'react'
import { useTheme } from '@/context/theme-context'

export function Background() {
    const { theme, ..._ } = useTheme()
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas!.getContext('2d')!

        let width: number
        let height: number

        class Line {
            public origin: any
            public size: any
            public length: any
            public color: any
            public style: any
            public offSet: any
            public line: any
            public offSetSpeed: any

            constructor(origin: any, size: any, length: any, color: any, style: any = 'pattern') {
                this.origin = origin
                this.size = size
                this.length = length
                this.color = color
                this.style = style

                this.origin = `M${origin.x},${origin.y}`
                this.offSet = 0
                this.line = null
                this.offSetSpeed = length / size
            }

            public getColorString() {
                return `hsla(${this.color.h}deg,${this.color.s}%,${this.color.l}%,${this.color.a})`;
            }

            public generators() {
                return [
                    {
                        line: `h${this.size}`,
                        mag: this.size
                    },
                    {
                        line: `h-${this.size}`,
                        mag: this.size
                    },
                    {
                        line: `v${this.size}`,
                        mag: this.size
                    },
                    {
                        line: `v-${this.size}`,
                        mag: this.size
                    },
                    {
                        line: `l${this.size},${this.size}`,
                        mag: Math.hypot(this.size, this.size)
                    },
                    {
                        line: `l${this.size}-${this.size}`,
                        mag: Math.hypot(this.size, this.size)
                    },
                    {
                        line: `l-${this.size},${this.size}`,
                        mag: Math.hypot(this.size, this.size)
                    },
                    {
                        line: `l-${this.size}-${this.size}`,
                        mag: Math.hypot(this.size, this.size)
                    }
                ];
            }

            public generate() {
                let segments = this.generators();
                let path = this.origin;
                let mag = 0;
                let fragment;
                let i;
                for (i = 0; i < this.length; i += 1) {
                    fragment = segments[(Math.random() * segments.length) | 0];
                    path += ` ${fragment.line}`;
                    mag += fragment.mag;
                }
                this.line = {
                    path,
                    mag
                };
                return this;
            }

            public renderStyle(style: any) {
                if (style === "glitches") {
                    ctx.lineDashOffset = this.line.mag + this.offSet;
                    ctx.setLineDash([
                        this.size ** 1.5,
                        (this.line.mag / this.length) * this.size ** 2
                    ]);
                    this.offSet += 20;
                    // this.size / (this.size ** 2);
                    ctx.lineWidth = 2;
                    return this;
                }

                if (style === "pattern") {
                    ctx.lineDashOffset = this.line.mag - this.offSet;
                    ctx.setLineDash([this.line.mag, this.line.mag]);
                    this.offSet += 10;
                    //this.size / (this.size ** 100);
                    ctx.lineWidth = 0.2;
                }
            }

            public mutatePath() {
                let lineFragment = this.line.path.split(" ").slice(1);
                let generator = this.generators();
                lineFragment[(Math.random() * lineFragment.length) | 0] = generator[(Math.random() * generator.length) | 0].line;
                this.line.path = `${this.line.path.split(" ")[0]} ${lineFragment.join(
                    " "
                )}`;
            }

            public draw() {
                !this.line && this.generate();

                ctx.strokeStyle = this.getColorString();
                this.renderStyle(this.style);
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.stroke(new Path2D(this.line.path));
                return this;
            }
        }

        function clear() {
            ctx.fillStyle = theme === 'light' ? 'rgb(249 250 251 / 1)' : `hsla(200deg, 20%, 10%, 0.3)`;
            ctx.fillRect(0, 0, width, height);
        }

        function generateLines(amount: any) {
            let lines = [];
            let styles = [
                {
                    size: 1.25,
                    style: "pattern",
                    color: { h: 210, s: 100, l: 70, a: 0.5 }
                },
                { size: 2.5, style: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
                { size: 5, style: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
                { size: 10, style: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
                { size: 20, style: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
                { size: 20, style: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
                { size: 40, style: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
                { size: 80, style: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
                { size: 40, style: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
                { size: 20, style: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
                { size: 60, style: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } }
            ];
            for (let i = 0; i < amount; i += 1) {
                let style = styles[(Math.random() ** 2 * styles.length) | 0];
                lines.push(
                    new Line(
                        { x: width * 0.5, y: height * 0.5 },
                        style.size,
                        500 + Math.random() * 1000,
                        style.color,
                        style.style
                    )
                );
            }
            return lines;
        }

        let id: any;
        function resize() {
            id = cancelAnimationFrame(id);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas!.width = width;
            canvas!.height = height;
            const lines = generateLines(40);
            function update() {
                if (!(id % 3)) {
                    clear();
                    lines.forEach((line) => {
                        line.draw();
                        if (!(id % 5) && Math.random() > 0.95) {
                            line.mutatePath();
                        }
                    });
                }
                id = requestAnimationFrame(update);
            }
            id = requestAnimationFrame(update);
        }

        window.addEventListener("resize", resize, {
            passive: true
        });

        resize()
    }, [theme])

    return <canvas ref={canvasRef} className='fixed top-0 left-0 -z-10 w-[100%] h-[100%] bg-gray-50 dark:bg-[hsla(240deg, 20%, 20%, 1)]'></canvas>
}