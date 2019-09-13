// JavaScript Document

$(document).ready(function() {
	$('.ul2').hide();
	$('.ul3').hide();
	$('.ul4').hide();
	$('.ul5').hide();
	$('.ul6').hide();
	$('.ul7').hide();
	$('.ul8').hide();
	$('.ul9').hide();
	$('.ul10').hide();
	$('#race1').hide();
	$('#race2').hide();
	$('#race3').hide();
	$('#race4').hide();
	$('#race5').hide();
	$('#race6').hide();
	$('#race7').hide();
	$('#race8').hide();
	$('#race9').hide();
	$('#race10').hide();
	$('#randomize').click(function(){
	$('.ul2').hide();
	$('.ul3').hide();
	$('.ul4').hide();
	$('.ul5').hide();
	$('.ul6').hide();
	$('.ul7').hide();
	$('.ul8').hide();
	$('.ul9').hide();
	$('.ul10').hide();
	$('#race1').hide();
	$('#race2').hide();
	$('#race3').hide();
	$('#race4').hide();
	$('#race5').hide();
	$('#race6').hide();
	$('#race7').hide();
	$('#race8').hide();
	$('#race9').hide();
	$('#race10').hide();
    var race = new Array("Altmer", "Argonian", "Bosmer", "Breton", "Dunmer", "Imperial", "Khajit", "Nord", "Orc", "Redguard"),
    randrace = race[Math.floor( Math.random() * race.length )];
    $('#race').val( randrace );
	var racecond=$('#race').val();
	if (racecond=='Altmer'){
		$('#race1').show();
	} else if (racecond=='Argonian') {
		$('#race2').show();
	} else if (racecond=='Bosmer') {
		$('#race3').show();
	} else if (racecond=='Breton') {
		$('#race4').show();
	} else if (racecond=='Dunmer') {
		$('#race5').show();
	} else if (racecond=='Imperial') {
		$('#race6').show();
	} else if (racecond=='Khajit') {
		$('#race7').show();
	} else if (racecond=='Nord') {
		$('#race8').show();
	} else if (racecond=='Orc') {
		$('#race9').show();
	} else if (racecond=='Redguard') {
		$('#race10').show();
	} 
	var talent1 = new Array("Heavy Armor", "Smithing", "Restoration", "Archery", "Lockpicking", "Alchemy", "Enchanting", "Speech","Illusion", "Alteration", "Block", "Light Armor", "Pickpocket", "Sneak", "Two handed", "Destruction", "One Handed", "Archery", "Conjuration"),
	randtalent1 = talent1[Math.floor( Math.random() * talent1.length )];
	$('#talent1').val( randtalent1 );
	var talent2 = new Array("Heavy Armor", "Smithing", "Restoration", "Archery", "Lockpicking", "Alchemy", "Enchanting", "Speech","Illusion", "Alteration", "Block", "Light Armor", "Pickpocket", "Sneak", "Two handed", "Destruction", "One Handed", "Archery", "Conjuration"),
	randtalent2 = talent2[Math.floor( Math.random() * talent2.length )];
	$('#talent2').val( randtalent2 ); 
	var ethical = new Array("Chaotic Good", "Neutral Good", "Lawful Good", "Chaotic Neutral", "True Neutral", "Lawful Neutral", "Chaotic Evil", "Neutral Evil", "Lawful Evil"),
    randeth = ethical[Math.floor( Math.random() * ethical.length )];
    $('#ethical').val( randeth );
	var ethcond=$('#ethical').val();
	if (ethcond=='Chaotic Good'){
		$('.ul2').show();
	} else if (ethcond=='Neutral Good') {
		$('.ul3').show();	
	} else if (ethcond=='Lawful Good') {
		$('.ul4').show();		
	} else if (ethcond=='Chaotic Neutral') {
		$('.ul5').show();	
	} else if (ethcond=='True Neutral') {
		$('.ul6').show();	
	} else if (ethcond=='Lawful Neutral') {
		$('.ul7').show();	
	} else if (ethcond=='Chaotic Evil') {
		$('.ul8').show();	
	} else if (ethcond=='Neutral Evil') {
		$('.ul9').show();	
	} else if (ethcond=='Lawful Evil') {
		$('.ul10').show();	
	} 
	var virtue = new Array("Valour", "Charity", "Patience", "Temperance", "Diligence", "Kindness"),
    randvirtue = virtue[Math.floor( Math.random() * virtue.length )];
	$('#virtue').val( randvirtue );
	var flaw = new Array("Pride", "Greed", "Lust", "Gluttony", "Wrath", "Envy"),
    randflaw = flaw[Math.floor( Math.random() * flaw.length )];
	$('#flaw').val( randflaw );
	var co = new Array("Assassin", "Blacksmith", "Chef", "Farmer", "Fisherman", "Hunter", "Merchant", "Miner", "Soldier", "Thief"),
    randco = co[Math.floor( Math.random() * co.length )];
	$('#co').val( randco );
	var sl = new Array("Falkreath", "Riften", "Solitude", "Windhelm", "Morthal", "Markarth", "Dawnstar", "Whiterun", "Winterhold"),
    randsl = sl[Math.floor( Math.random() * sl.length )];
	$('#sl').val( randsl );
	var intr = new Array("Agriculture", "Architecture", "Beastiary", "Barter and Economics", "Culinary Arts", "Fitness and Exercise", "History", "Horseback Riding", "Mountain Climbing", "Politics", "Theology"),
    randintr = intr[Math.floor( Math.random() * intr.length )];
	$('#intr').val( randintr );
	var mot = new Array("Research", "Mystery", "Vengeance", "Family Heirloom", "Exile", "Redemption", "Recovery", "War", "Love", "Pilgrimage", "Wealth and Power"),
    randmot = mot[Math.floor( Math.random() * mot.length )];
	$('#mot').val( randmot );
	var mqa = new Array("Greybeards", "Blades"),
    randmqa = mqa[Math.floor( Math.random() * mqa.length )];
	$('#mqa').val( randmqa );
	var vwn = new Array("Vampire", "Werewolf", "None"),
    randvwn = vwn[Math.floor( Math.random() * vwn.length )];
	$('#vwn').val( randvwn );
	});
});