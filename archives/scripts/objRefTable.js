const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Flash,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Behaviors.Pin,
		C3.Behaviors.Anchor,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Behaviors.Pathfinding,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Pathfinding.Acts.FindPath,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Pathfinding.Acts.StartMoving,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Pathfinding.Acts.SetAcc,
		C3.Behaviors.Pathfinding.Acts.SetSpeed,
		C3.Behaviors.Pathfinding.Acts.SetMaxSpeed,
		C3.Behaviors.Pathfinding.Acts.SetDec,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Keyboard.Cnds.OnKey
	];
};
self.C3_JsPropNameTable = [
	{vida_boneco: 0},
	{Piscar: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{Sprite2: 0},
	{Sólido: 0},
	{Sprite3: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Sprite4: 0},
	{Fixar: 0},
	{Sprite5: 0},
	{coração3: 0},
	{Âncora: 0},
	{Sprite6: 0},
	{coracao2: 0},
	{Sprite7: 0},
	{coracao1: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Projétil: 0},
	{Sprite10: 0},
	{pontos: 0},
	{Mouse: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Teclado: 0},
	{Texto2: 0},
	{Sprite14: 0},
	{Texto: 0},
	{Texto3: 0},
	{Sprite15: 0},
	{VidaAzul: 0},
	{ExploradorDeRotas: 0},
	{Sprite16: 0},
	{Sprite: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{velocidadeAzul: 0}
];

self.InstanceType = {
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	pontos: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {}
}