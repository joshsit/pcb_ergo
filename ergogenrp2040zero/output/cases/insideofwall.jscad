function joined2_extrude_5_outline_fn(){
    return new CSG.Path2D([[54.5139686,-133.0506566],[69.7734398,-137.8619494]]).appendArc([72.9094967,-136.2294215],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([74.2626728,-131.9376953]).appendArc([77.3987297,-130.3051674],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([90.750767,-134.5150486]).appendArc([93.8868239,-132.8825207],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([95.24,-128.5907945]).appendArc([98.3760569,-126.9582665],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([109.8206602,-130.5667361]).appendArc([111.4531881,-133.702793],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([104.3866018,-156.1151413]).appendArc([106.0191297,-159.2511982],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([157.5198451,-175.4893114]).appendArc([160.655902,-173.8567835],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([162.605144,-167.6745776]).appendArc([164.9894364,-165.9263421],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([179.1056044,-165.9263421]).appendArc([181.4898968,-167.6745776],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([183.4391388,-173.8567835]).appendArc([186.5751957,-175.4893114],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([238.0759111,-159.2511982]).appendArc([239.708439,-156.1151413],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([232.6418527,-133.702793]).appendArc([234.2743806,-130.5667361],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([245.7189839,-126.9582665]).appendArc([248.8550408,-128.5907944],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([250.2082169,-132.8825207]).appendArc([253.3442738,-134.5150486],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([266.6963111,-130.3051674]).appendArc([269.832368,-131.9376953],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([271.1855441,-136.2294215]).appendArc([274.321601,-137.8619494],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([289.5810722,-133.0506566]).appendArc([291.2136001,-129.9145997],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([274.9754869,-78.4138844]).appendArc([271.83943,-76.7813565],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([258.4873927,-80.9912377]).appendArc([255.3513358,-79.3587098],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([253.9981597,-75.0669836]).appendArc([250.8621028,-73.4344557],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([237.5100656,-77.6443369]).appendArc([234.3740087,-76.011809],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([233.0208326,-71.7200827]).appendArc([229.8847757,-70.0875548],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([214.6253045,-74.8988476]).appendArc([212.9927766,-78.0349045],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([214.3459527,-82.3266307]).appendArc([212.7134248,-85.4626876],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([180.0135145,-95.7729297]).appendArc([179.2617501,-95.8886373],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([164.8332907,-95.8886373]).appendArc([164.0815262,-95.7729297],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([131.381616,-85.4626876]).appendArc([129.7490881,-82.3266307],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([131.1022642,-78.0349045]).appendArc([129.4697363,-74.8988476],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([114.2102651,-70.0875548]).appendArc([111.0742082,-71.7200827],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([109.7210321,-76.0118089]).appendArc([106.5849752,-77.6443369],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([93.232938,-73.4344557]).appendArc([90.0968811,-75.0669836],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([88.743705,-79.3587098]).appendArc([85.6076481,-80.9912377],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([72.2556108,-76.7813565]).appendArc([69.1195539,-78.4138844],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([52.8814407,-129.9145997]).appendArc([54.5139686,-133.0506566],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function insideofwall_case_fn() {
                    

                // creating part 0 of case insideofwall
                let insideofwall__part_0 = joined2_extrude_5_outline_fn();

                // make sure that rotations are relative
                let insideofwall__part_0_bounds = insideofwall__part_0.getBounds();
                let insideofwall__part_0_x = insideofwall__part_0_bounds[0].x + (insideofwall__part_0_bounds[1].x - insideofwall__part_0_bounds[0].x) / 2
                let insideofwall__part_0_y = insideofwall__part_0_bounds[0].y + (insideofwall__part_0_bounds[1].y - insideofwall__part_0_bounds[0].y) / 2
                insideofwall__part_0 = translate([-insideofwall__part_0_x, -insideofwall__part_0_y, 0], insideofwall__part_0);
                insideofwall__part_0 = rotate([0,0,0], insideofwall__part_0);
                insideofwall__part_0 = translate([insideofwall__part_0_x, insideofwall__part_0_y, 0], insideofwall__part_0);

                insideofwall__part_0 = translate([0,0,0], insideofwall__part_0);
                let result = insideofwall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return insideofwall_case_fn();
            }

        