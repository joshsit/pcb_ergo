
module.exports = {
    params: {
        designator: 'T',
        side: 'F',
        from: { type: 'net', value: 'from' },
        to: { type: 'net', value: 'to' }
    },
    body: p => `
        (module 1test_slide_switch (layer ${p.side}.Cu) (tstamp 9817f8e5-cfd8-4a02-b9d7-0005e2eed6ea)
            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 -0.5 ${p.r}) (layer ${p.side}.SilkS) ${p.ref_hide} hide (effects (font (size 1 1) (thickness 0.1))))
            (fp_text value "1test slide switch" (at 0 1 ${p.r}) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))
            (fp_text user "Datasheet" (at 0 0 ${p.r}) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))
            (fp_text user "Description" (at 0 0 ${p.r}) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

            ${'' /* silkscreen outline */}
            (fp_line (start -4.25 -1.75) (end 4.25 -1.75) (layer ${p.side}.SilkS) (width 0.1))
            (fp_line (start -4.25 1.75) (end -4.25 -1.75) (layer ${p.side}.SilkS) (width 0.1))
            (fp_line (start 4.25 -1.75) (end 4.25 1.75) (layer ${p.side}.SilkS) (width 0.1))
            (fp_line (start 4.25 1.75) (end -4.25 1.75) (layer ${p.side}.SilkS) (width 0.1))

            ${'' /* pads */}
            (pad 1 thru_hole circle (at 2.5 0 ${p.r}) (size 1.905 1.905) (drill 1) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 0 0 ${p.r}) (size 1.905 1.905) (drill 1) (layers *.Cu *.Mask) ${p.to.str})
            (pad 3 thru_hole circle (at -2.5 0 ${p.r}) (size 1.905 1.905) (drill 1) (layers *.Cu *.Mask))
        )
    `
}