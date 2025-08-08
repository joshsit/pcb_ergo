function xl_joined_outline_extrude_5_outline_fn(){
    return new CSG.Path2D([[52.6323345,-134.0301733],[70.7529565,-139.7435835]]).appendArc([73.8890134,-138.1110556],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([75.2421895,-133.8193294]).appendArc([78.3782464,-132.1868015],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([91.7302837,-136.3966827]).appendArc([94.8663406,-134.7641548],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([96.2195167,-130.4724286]).appendArc([99.3555736,-128.8399006],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([107.9390261,-131.5462528]).appendArc([109.571554,-134.6823097],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([102.5049677,-157.094658]).appendArc([104.1374956,-160.2307149],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([158.4993618,-177.3709455]).appendArc([161.6354187,-175.7384176],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([163.7254772,-169.1095988]).appendArc([166.1097697,-167.3613633],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([177.9852711,-167.3613633]).appendArc([180.3695635,-169.1095988],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([182.4596221,-175.7384176]).appendArc([185.595679,-177.3709455],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([239.9575452,-160.2307149]).appendArc([241.5900731,-157.094658],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([234.5234868,-134.6823097]).appendArc([236.1560147,-131.5462528],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([244.7394672,-128.8399006]).appendArc([247.8755241,-130.4724285],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([249.2287002,-134.7641548]).appendArc([252.3647571,-136.3966827],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([265.7167944,-132.1868015]).appendArc([268.8528513,-133.8193294],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([270.2060274,-138.1110556]).appendArc([273.3420843,-139.7435835],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([291.4627063,-134.0301733]).appendArc([293.0952342,-130.8941164],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([275.9550036,-76.5322503]).appendArc([272.8189467,-74.8997224],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([259.4669094,-79.1096036]).appendArc([256.3308525,-77.4770757],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([254.9776764,-73.1853495]).appendArc([251.8416195,-71.5528216],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([238.4895823,-75.7627028]).appendArc([235.3535254,-74.1301749],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([234.0003493,-69.8384486]).appendArc([230.8642924,-68.2059207],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([212.7436704,-73.9193309]).appendArc([211.1111425,-77.0553878],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([212.4643186,-81.347114]).appendArc([210.8317907,-84.4831709],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([179.6697084,-94.3085377]).appendArc([178.9179439,-94.4242453],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([165.1770969,-94.4242453]).appendArc([164.4253324,-94.3085377],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([133.2632502,-84.4831709]).appendArc([131.6307222,-81.347114],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([132.9838983,-77.0553878]).appendArc([131.3513704,-73.9193309],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([113.2307484,-68.2059207]).appendArc([110.0946915,-69.8384486],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([108.7415154,-74.1301748]).appendArc([105.6054585,-75.7627028],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([92.2534213,-71.5528216]).appendArc([89.1173644,-73.1853495],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([87.7641883,-77.4770757]).appendArc([84.6281314,-79.1096036],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([71.2760941,-74.8997224]).appendArc([68.1400372,-76.5322503],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([50.9998066,-130.8941164]).appendArc([52.6323345,-134.0301733],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function outsideofwall_case_fn() {
                    

                // creating part 0 of case outsideofwall
                let outsideofwall__part_0 = xl_joined_outline_extrude_5_outline_fn();

                // make sure that rotations are relative
                let outsideofwall__part_0_bounds = outsideofwall__part_0.getBounds();
                let outsideofwall__part_0_x = outsideofwall__part_0_bounds[0].x + (outsideofwall__part_0_bounds[1].x - outsideofwall__part_0_bounds[0].x) / 2
                let outsideofwall__part_0_y = outsideofwall__part_0_bounds[0].y + (outsideofwall__part_0_bounds[1].y - outsideofwall__part_0_bounds[0].y) / 2
                outsideofwall__part_0 = translate([-outsideofwall__part_0_x, -outsideofwall__part_0_y, 0], outsideofwall__part_0);
                outsideofwall__part_0 = rotate([0,0,0], outsideofwall__part_0);
                outsideofwall__part_0 = translate([outsideofwall__part_0_x, outsideofwall__part_0_y, 0], outsideofwall__part_0);

                outsideofwall__part_0 = translate([0,0,0], outsideofwall__part_0);
                let result = outsideofwall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return outsideofwall_case_fn();
            }

        