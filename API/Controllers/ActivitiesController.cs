using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Activities;

namespace API.Controllers
{
	public class ActivitiesController : BaseAPIController
	{


		[HttpGet] //api/activities
		public async Task<ActionResult<List<Activity>>> GetActivities()
		{
			return await Mediator.Send(new List.Query());
		}

		[HttpGet("{id}")] //api/activities/id
		public async Task<ActionResult<Activity>> GetActivity(Guid id)
		{
			return await Mediator.Send(new Details.Query { Id = id });
		}

		[HttpPost]
		public async Task<IActionResult> CreateActivity(Activity activity)
		{
			await Mediator.Send(new Create.Command { Activity = activity });
			return Ok();
		}

	}
}